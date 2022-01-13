import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

export const ButtonOfLike = ({likeCount}) => (

    <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' color="white" />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        {likeCount}
      </Label>
      </Button>

      )

 export const ButtonOfComment = () => (



    <Button as='div' labelPosition='right'>
      <Button basic color='purple'>
        <Icon name='comment' />
        Comment
      </Button>
      <Label as='a' basic color='purple' pointing='left'>
        0
      </Label>
    </Button>
  



)

