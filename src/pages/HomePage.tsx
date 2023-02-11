import React, { useState, useEffect } from 'react';
import { Col, Container, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/esm/Alert';
import RepoCard from '../Components/RepoCard';
import { useDebounce } from '../hooks/debounce';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/github.api';

export default function HomePage() {
  const [ search, setSearch ] = useState<string>('');
  const debounced = useDebounce(search);
  const { 
    isLoading, 
    isError, 
    data 
  } = useSearchUsersQuery(debounced, { skip: debounced.length < 3 });

  const [ 
    fetchRepos, 
    { isLoading: isLoadingRepos, data: dataRepos }
  ] = useLazyGetUserReposQuery()

  const clickHandler = (userName: string) => {
    fetchRepos(userName);
    setTimeout(() => {
      setSearch('');
    }, 500);
  }

  return (
    <Container>
      <Row className="mt-2">
        <Col>
          { isError && ( 
            <Alert variant="danger"> 
              Something went wrong... { isError } 
            </Alert> 
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <InputGroup>
            <Form.Control 
              type="text" 
              placeholder="Search for GitHub username..."
              value={ search }
              onChange={ el => setSearch( el.target.value )}
            />
          </InputGroup>

          <ListGroup className="mb-1">
              { isLoading && <ListGroup.Item> Loading... </ListGroup.Item> }
              { data?.map((user) => (
                <ListGroup.Item 
                  action 
                  key={ user.id }
                  variant="dark"
                  onClick={ () => clickHandler(user.login) }
                >
                  { user.login }
                </ListGroup.Item>
              ))}
          </ListGroup>
          <ListGroup>
            { isLoadingRepos && <p>Repos are loading...</p> }
            { dataRepos?.map(repo => (
                <RepoCard key={ repo.id } repo={ repo } />
            )) }
          </ListGroup>    
        </Col>
      </Row>
    </Container>
  );
}