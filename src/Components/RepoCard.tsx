import React, { useState } from 'react'
import { Button, ListGroup, Navbar } from 'react-bootstrap'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { InterfaceRepo } from '../models/models'

type Props = {
  repo: InterfaceRepo
}

export default function RepoCard({ repo }: Props) {
  const { addFavorite, removeFavorite } = useActions();
  const { favourites } = useAppSelector(state => state.github);
  const [ isFav, setIsFav ] = useState(favourites.includes(repo.html_url))

  const addToFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addFavorite(repo.html_url);
    setIsFav(true)
  }

  const removeFromFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    removeFavorite(repo.html_url);
    setIsFav(false);
  }

  return (
    <ListGroup.Item 
      action  
      variant="light" 
      target="_blank"
      className="mb-2"
    >
      <Navbar.Brand  
        href={ repo.html_url }
      >
        <h3>{ repo.full_name }</h3>
        <hr/>
        <h2>{ repo.forks }</h2>
        <p>{ repo.watchers }</p>
        <p>{ repo.description }</p>
      </Navbar.Brand>

      { !isFav && (
        <Button 
          variant="secondary"
          className="me-3"
          onClick={ addToFavourites }
        >
          Add to favorites
        </Button>
      )}

      { isFav && (
        <Button 
          variant="warning"
          onClick={ removeFromFavourites }
        >
          Remove from favorites
        </Button>
      )}
    </ListGroup.Item>
  )
}