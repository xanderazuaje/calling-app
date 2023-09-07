import React from 'react'
import Webcam from './webcam'
import { isPermissionAllowed, isPermissionBlocked, isPermissionAsk } from 'cypress-browser-permissions'

describe('camera logic', () => {
  isPermissionAllowed('camera') && it('renders video with autoPlay', ()=>{
    cy.mount(<Webcam />)
    cy.get('video').should('have.attr', 'autoPlay')
  })
  isPermissionAllowed('camera') && it('renders video with muted', ()=>{
    cy.mount(<Webcam />)
    cy.get('video').should('have.prop', 'muted')
  })
  isPermissionAllowed('camera') && it('should not show span error message if permission is granted', ()=>{
    cy.mount(<Webcam />)
    cy.get('span').should('not.exist')
  })
  isPermissionBlocked('camera') &&
  it('should show span error message if permission is not granted', ()=>{
    cy.mount(<Webcam />)
    cy.get('span').contains('Permission not granted').should('exist')
   })
   it('should toggle camera when button is clicked', ()=>{
      cy.mount(<Webcam />)
      cy.get('#toggle-camera').click()
      cy.get('video').should('have.attr', 'srcObject', null)
    })
})

describe('Webcam UI', () => {
  it ('has a button', () => {
    cy.mount(<Webcam />)
  })
  it ('has an unique button to toggle the camera', ()=>{
    cy.mount(<Webcam />)
    cy.get('#toggle-camera').should('have.length', 1)
  })
  it ('has an unique button to toggle the mic')
})
