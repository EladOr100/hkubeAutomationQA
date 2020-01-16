// const fs = require ('fs')
const js = require('../../../configuration/ids_for_cypress.json')
console.log("start")
let url_simulator = 'https://cd.hkube.io/hkube/simulator/'
let url_playground = 'http://playground.hkube.io/'

context('Actions', () => {
    beforeEach(() => {
      cy.visit(url_simulator)
      try {
        cy.get('[data-action=skip]').click()
      } catch (error) {
          console.log("no skip needed")
      }
    })

describe('add algo' ,function(){

    it('play with hkube',function(){
       
        cy.get(js.algo.add_algo).click()
        cy.get(js.algo.add_algo_name_field)
        .type('hkubtestaddalgofromimage')
        cy.get(js.algo.build_type_algo_button).click()
        cy.get(js.algo.algo_image_name)
           .type('zivna/combiner:v1.0.0')
        cy.contains('Submit').click()  
    })
})
describe('start pipline from pipline window' ,function(){

    it('start pipline from pipline window',function(){
        cy.get(js.pipline.pip_window_button).click()
        cy.get(js.pipline.run_pip).click()
        cy.get(js.pipline.run_stored_pipline)
          .click()
        cy.get(js.pipline.run_stored_pipline)
          .type('{esc}')
        
    })
})
describe('action test tool' ,function(){

    it('action test tool',function(){
        cy.get(js.general.action_tool).click()
        cy.contains("Stored").click()
          .type('{backspace}')
          .type('{backspace}')
          .type('{backspace}')
          .type('{backspace}')
          .type('{backspace}')
          .type('{backspace}')
          .type('{downarrow}')
          .type('{enter}')
          .type('{downarrow}')
          .type('{enter}')
          .type('{downarrow}')
          .type('{enter}')
          .type('{downarrow}')
          .type('{enter}')
          .type('{downarrow}')
          .type('{enter}')
          .type('{downarrow}')
          .type('{enter}')
          .type('{esc}')
          cy.get(js.pipline.search_in_current_table_pipline).click()
        //   test(js.pipline.search_in_current_table_pipline)

        
    })
})
// function test(element){
//     let flag=true
//     while(flag){
//         try {
//             cy.get(element)
//             .type('{downarrow}')
//             .type('{downarrow}')
//             .type('{enter}')
//         } catch (error) {
//             flag = false
//         }
//     }
// }
})



