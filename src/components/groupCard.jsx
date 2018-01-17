import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const CardExampleCardProps = () => (
  <Card
    image='http://via.placeholder.com/290x290'
    header='Test Group'
    meta='Group'
    description='This is a test group'
    extra={extra}
  />
)

export default CardExampleCardProps
