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
  it('renders video with autoPlay', ()=>{
    cy.mount(<Webcam />)
    cy.get('video').should('have.attr', 'autoPlay')
  })
  it('renders video with muted', ()=>{
    cy.mount(<Webcam />)
    cy.get('video').should('have.attr', 'muted')
  })
})
