import React from 'react'
import Webcam from './webcam'

describe('<Webcam />', () => {
  it('renders', () => {
    cy.mount(<Webcam />)
  }),
  it('renders video', () => {
    cy.mount(<Webcam />)
    cy.get('video').should('exist')
  })
})
