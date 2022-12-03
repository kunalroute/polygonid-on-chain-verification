// Imports
// ========================================================
import { QRCode } from 'react-qr-svg';
import proofRequest from '../../proofRequest';

// Config
// ========================================================
// update with your contract address
const DEPLOYED_CONTRACT_ADDRESS = "0x21eF0d7E2B26b83A07c9b27b6cF056A43CC5cA86";

/**
 * 
 */
let qrProofRequestJson: any = { ...proofRequest };
qrProofRequestJson.body.transaction_data.contract_address = DEPLOYED_CONTRACT_ADDRESS;
qrProofRequestJson.body.scope[0].rules.query.req = {
  // NOTE: this value needs to match the Attribute name in https://platform-test.polygonid.com
  "customNumberAttribute": {
    // NOTE: this value needs to match the erc20ZkpRequest.ts L34 or erc721ZkpRequest.ts L34
    // - $tl = operator 2 erc20ZkpRequest.ts L38
    // - 20020101 = value erc20ZkpRequest.ts L41
    "$eq": 17
  }
};
// NOTE1: if you change this you need to resubmit the erc10|erc721ZKPRequest
// NOTE2: type is case-sensitive
// You can generate new schemas via https://platform-test.polygonid.com
qrProofRequestJson.body.scope[0].rules.query.schema = {
  "url": "https://platform-test.polygonid.com/claim-link/bbeb834b-c5df-4cde-8e18-e441041a2567",
  "type": "MyCustomSchema"
};

// Main Component
// ========================================================
const App = () => {

  return (
    <div className="App p-10">
      <QRCode
        level="Q"
        style={{ width: 256 }}
        value={JSON.stringify(qrProofRequestJson)}
      />
    </div>
  )
};

// Exports
// ========================================================
export default App;
