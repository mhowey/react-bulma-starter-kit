import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Columns extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (<>
        <section className='content'>
        <div className='columns is-multiline'>
            <div className='column is-one-third'>
                Poke kombucha banjo lyft, direct trade raclette authentic leggings palo santo XOXO chambray. Authentic food truck bicycle rights, YOLO DIY la croix raw denim post-ironic semiotics echo park microdosing. Blue bottle typewriter raw denim pickled, put a bird on it gochujang flexitarian chartreuse VHS forage air plant coloring book. Fixie celiac kinfolk, art party vice meh iceland. Adaptogen bitters enamel pin, stumptown hexagon post-ironic cred.
            </div>
            <div className='column is-half box'>
                Lorem ipsum dolor amet whatever banh mi bushwick organic, keffiyeh raw denim cronut chia vinyl. Cred actually vexillologist skateboard helvetica single-origin coffee truffaut swag hexagon fam franzen lomo narwhal ugh. Prism kickstarter meditation, beard try-hard af pabst taiyaki biodiesel bitters skateboard. Paleo listicle synth, whatever swag chambray letterpress poke waistcoat gochujang edison bulb. Helvetica street art twee raclette migas, snackwave vexillologist hexagon flannel kogi 8-bit tote bag copper mug. Succulents taxidermy you probably haven't heard of them messenger bag cornhole kombucha kogi hammock semiotics asymmetrical chambray godard vice forage.
            </div>
            <div className='column'>
                Sriracha migas wolf plaid banh mi, church-key pinterest kinfolk. Dreamcatcher adaptogen subway tile, listicle 3 wolf moon umami kale chips keytar gochujang flannel taxidermy intelligentsia. 
            </div>
        </div>
      </section>
      <section className='content'>
        <div className='columns'>
            <div className='column is-half'>
                Lorem ipsum dolor amet whatever banh mi bushwick organic, keffiyeh raw denim cronut chia vinyl. Cred actually vexillologist skateboard helvetica single-origin coffee truffaut swag hexagon fam franzen lomo narwhal ugh. Prism kickstarter meditation, beard try-hard af pabst taiyaki biodiesel bitters skateboard. Paleo listicle synth, whatever swag chambray letterpress poke waistcoat gochujang edison bulb. Helvetica street art twee raclette migas, snackwave vexillologist hexagon flannel kogi 8-bit tote bag copper mug. Succulents taxidermy you probably haven't heard of them messenger bag cornhole kombucha kogi hammock semiotics asymmetrical chambray godard vice forage.
            </div>
            <div className='column'>
                Lorem ipsum dolor amet whatever banh mi bushwick organic, keffiyeh raw denim cronut chia vinyl. Cred actually vexillologist skateboard helvetica single-origin coffee truffaut swag hexagon fam franzen lomo narwhal ugh. Prism kickstarter meditation, beard try-hard af pabst taiyaki biodiesel bitters skateboard. Paleo listicle synth, whatever swag chambray letterpress poke waistcoat gochujang edison bulb. Helvetica street art twee raclette migas, snackwave vexillologist hexagon flannel kogi 8-bit tote bag copper mug. Succulents taxidermy you probably haven't heard of them messenger bag cornhole kombucha kogi hammock semiotics asymmetrical chambray godard vice forage.
            </div>
        </div>
      </section>
    </>)
  }
}
