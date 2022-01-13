import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

export const ButtonOfLike = ({likeCount}) => (

    <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart'  />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        {likeCount}
      </Label>
      </Button>

      )

 export const ButtonOfComment = ({item}) => (




    <Button as='div' labelPosition='right'>
      <Button basic color='purple'>
        <Icon name='comment' />
        Comment
      </Button>
      <Label as='a' basic color='purple' pointing='left'>
        {Object.keys(item.comm).length - 1}
      </Label>
    </Button>
  



)

