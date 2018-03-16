import React from 'react'
import {Container, Row, Col} from 'reactstrap';

import FAUnlock from 'react-icons/lib/fa/unlock-alt'
import MDSettings from 'react-icons/lib/md/settings'

export default class ZGuide extends React.Component {
  render () {
    return (      
      <Container>      
        <Row>
          <Col>                          
            <h3>1. Creating a new wallet</h3>
            <ul>
              <li>Go to <a href="https://wwww.myBTCPwallet.com">https://www.myBTCPwallet.com</a></li>
              <li>Enter a strong but easy to remember secret phrase. Save this somewhere and do NOT forget it.</li>
              <li>Click the <code>Unlock Button</code> (<FAUnlock/>) on the right.</li>
                <ul><li>This creates a <a href="https://en.bitcoin.it/wiki/Deterministic_wallet">deterministic wallet</a> based on your secret phrase.</li></ul>                        
            </ul>

            <br/>

            <h3>2. Accessing an existing wallet</h3>
            <ul>
              <li>If you've created a wallet on <a href="https://www.myBTCPwallet.com">https://www.myBTCPwallet.com</a> via the secret phrase, simply re-enter the same phrase.</li>
              <li>For those with a <code>wallet.dat</code> file generated by GUI wallets. Click <code>settings</code> (<MDSettings/>), select the <code>Load wallet.dat</code> option and load your <code>wallet.dat</code> file</li>
              <li>To unlock a single address, Click <code>settings</code> (<MDSettings/>), select the <code>Paste private key</code> option, paste in your private key and click the unlock button (<FAUnlock/>)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    )
  }
}
