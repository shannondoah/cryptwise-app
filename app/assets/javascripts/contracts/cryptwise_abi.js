CryptwiseApp.cryptwiseJson = {
  "contractName": "Cryptwise",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "escrow",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "setEscrow",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "transferEscrow",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_payee",
          "type": "address"
        }
      ],
      "name": "paymentsFor",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_payee",
          "type": "address"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36100d5610137565b604051809103906000f0801580156100f1573d6000803e3d6000fd5b50600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610147565b60405161079480610b2c83390190565b6109d6806101566000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631c933583146100a95780633ccfd60b1461010057806357cd0e2714610117578063715018a61461015a5780638da5cb5b146101715780638f32d59b146101c8578063c10c3546146101f7578063e2fdcc171461023a578063f2fde38b14610291578063f340fa01146102d4575b600080fd5b3480156100b557600080fd5b506100ea600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061030a565b6040518082815260200191505060405180910390f35b34801561010c57600080fd5b50610115610410565b005b34801561012357600080fd5b50610158600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104e7565b005b34801561016657600080fd5b5061016f6105d2565b005b34801561017d57600080fd5b506101866106a4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101d457600080fd5b506101dd6106cd565b604051808215151515815260200191505060405180910390f35b34801561020357600080fd5b50610238600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610724565b005b34801561024657600080fd5b5061024f61077b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561029d57600080fd5b506102d2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107b8565b005b610308600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107d7565b005b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e3a9db1a846040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156103ca57600080fd5b505af11580156103de573d6000803e3d6000fd5b505050506040513d60208110156103f457600080fd5b8101908080519060200190929190505050905080915050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166351cff8d9336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156104cd57600080fd5b505af11580156104e1573d6000803e3d6000fd5b50505050565b6104ef6106cd565b15156104fa57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632348238c826040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156105b757600080fd5b505af11580156105cb573d6000803e3d6000fd5b5050505050565b6105da6106cd565b15156105e557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b61072c6106cd565b151561073757600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006107856106cd565b151561079057600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6107c06106cd565b15156107cb57600080fd5b6107d4816108b0565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f340fa0134836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506000604051808303818588803b15801561089457600080fd5b505af11580156108a8573d6000803e3d6000fd5b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108ec57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820d0724d475863abbd5193aac1ab5866bbed6f7160cccbff826675e76c1684e85400296080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4101e71e974f68df5e9730cc223280b41654676bbb052cdcc735c3337e64d2d96000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16106bd806100d76000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632348238c1461007257806351cff8d9146100b5578063c6dbdf61146100f8578063e3a9db1a1461014f578063f340fa01146101a6575b600080fd5b34801561007e57600080fd5b506100b3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101dc565b005b3480156100c157600080fd5b506100f6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061033a565b005b34801561010457600080fd5b5061010d6104b7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015b57600080fd5b50610190600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104e0565b6040518082815260200191505060405180910390f35b6101da600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610529565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561023757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561027357600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4101e71e974f68df5e9730cc223280b41654676bbb052cdcc735c3337e64d2d96000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561039757600080fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610464573d6000803e3d6000fd5b508173ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5826040518082815260200191505060405180910390a25050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561058657600080fd5b3490506105db81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461067090919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4826040518082815260200191505060405180910390a25050565b600080828401905083811015151561068757600080fd5b80915050929150505600a165627a7a72305820af260a558a22ae033a5e83b8978ce4b384413dfa96b895f02dd4f92730d683670029",
  "deployedBytecode": "0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631c933583146100a95780633ccfd60b1461010057806357cd0e2714610117578063715018a61461015a5780638da5cb5b146101715780638f32d59b146101c8578063c10c3546146101f7578063e2fdcc171461023a578063f2fde38b14610291578063f340fa01146102d4575b600080fd5b3480156100b557600080fd5b506100ea600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061030a565b6040518082815260200191505060405180910390f35b34801561010c57600080fd5b50610115610410565b005b34801561012357600080fd5b50610158600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104e7565b005b34801561016657600080fd5b5061016f6105d2565b005b34801561017d57600080fd5b506101866106a4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101d457600080fd5b506101dd6106cd565b604051808215151515815260200191505060405180910390f35b34801561020357600080fd5b50610238600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610724565b005b34801561024657600080fd5b5061024f61077b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561029d57600080fd5b506102d2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107b8565b005b610308600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107d7565b005b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e3a9db1a846040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156103ca57600080fd5b505af11580156103de573d6000803e3d6000fd5b505050506040513d60208110156103f457600080fd5b8101908080519060200190929190505050905080915050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166351cff8d9336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156104cd57600080fd5b505af11580156104e1573d6000803e3d6000fd5b50505050565b6104ef6106cd565b15156104fa57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632348238c826040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156105b757600080fd5b505af11580156105cb573d6000803e3d6000fd5b5050505050565b6105da6106cd565b15156105e557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b61072c6106cd565b151561073757600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006107856106cd565b151561079057600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6107c06106cd565b15156107cb57600080fd5b6107d4816108b0565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f340fa0134836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506000604051808303818588803b15801561089457600080fd5b505af11580156108a8573d6000803e3d6000fd5b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108ec57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820d0724d475863abbd5193aac1ab5866bbed6f7160cccbff826675e76c1684e8540029",
  "sourceMap": "159:916:0:-;;;220:54;8:9:-1;5:2;;;30:1;27;20:12;5:2;220:54:0;518:10:3;509:6;;:19;;;;;;;;;;;;;;;;;;572:6;;;;;;;;;;;539:40;;568:1;539:40;;;;;;;;;;;;257:12:0;;:::i;:::-;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;257:12:0;247:7;;:22;;;;;;;;;;;;;;;;;;159:916;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "159:916:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;751:145;;8:9:-1;5:2;;;30:1;27;20:12;5:2;751:145:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1005:68;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1005:68:0;;;;;;581:166;;8:9:-1;5:2;;;30:1;27;20:12;5:2;581:166:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;1273:127:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1273:127:3;;;;;;639:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;639:70:3;;;;;;;;;;;;;;;;;;;;;;;;;;;926:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;926:83:3;;;;;;;;;;;;;;;;;;;;;;;;;;;484:93:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;484:93:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;278;;8:9:-1;5:2;;;30:1;27;20:12;5:2;278:93:0;;;;;;;;;;;;;;;;;;;;;;;;;;;1561:101:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1561:101:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;900::0;;;;;;;;;;;;;;;;;;;;;;;;;;;;751:145;810:7;825:16;844:7;;;;;;;;;;;:18;;;863:6;844:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;844:26:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;844:26:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;844:26:0;;;;;;;;;;;;;;;;825:45;;883:8;876:15;;751:145;;;;:::o;1005:68::-;1040:7;;;;;;;;;;;:16;;;1057:10;1040:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1040:28:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1040:28:0;;;;1005:68::o;581:166::-;824:9:3;:7;:9::i;:::-;816:18;;;;;;;;709:7:0;;;;;;;;;;;:23;;;733:8;709:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;709:33:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;709:33:0;;;;581:166;:::o;1273:127:3:-;824:9;:7;:9::i;:::-;816:18;;;;;;;;1367:1;1330:40;;1351:6;;;;;;;;;;;1330:40;;;;;;;;;;;;1393:1;1376:6;;:19;;;;;;;;;;;;;;;;;;1273:127::o;639:70::-;676:7;698:6;;;;;;;;;;;691:13;;639:70;:::o;926:83::-;965:4;998:6;;;;;;;;;;;984:20;;:10;:20;;;977:27;;926:83;:::o;484:93:0:-;824:9:3;:7;:9::i;:::-;816:18;;;;;;;;563:8:0;546:7;;:26;;;;;;;;;;;;;;;;;;484:93;:::o;278:::-;328:7;824:9:3;:7;:9::i;:::-;816:18;;;;;;;;358:7:0;;;;;;;;;;;343:23;;278:93;:::o;1561:101:3:-;824:9;:7;:9::i;:::-;816:18;;;;;;;;1629:28;1648:8;1629:18;:28::i;:::-;1561:101;:::o;900::0:-;956:7;;;;;;;;;;;:15;;;978:9;989:6;956:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;956:40:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;956:40:0;;;;;900:101;:::o;1796:169:3:-;1885:1;1865:22;;:8;:22;;;;1857:31;;;;;;;;1928:8;1899:38;;1920:6;;;;;;;;;;;1899:38;;;;;;;;;;;;1952:8;1943:6;;:17;;;;;;;;;;;;;;;;;;1796:169;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"openzeppelin-solidity/contracts/payment/escrow/Escrow.sol\";\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\n\ncontract Cryptwise is Ownable {\n  Escrow private _escrow;\n\n  constructor() public {\n    _escrow = new Escrow();\n  }\n\n  function escrow() external view onlyOwner returns(address) {\n    return address(_escrow);\n  }\n\n  /**\n    Would only need to use this in future versions of the\n    contract, to sync up the old escrow\n  */\n  function setEscrow(address _address) external onlyOwner {\n    _escrow = Escrow(_address);\n  }\n\n  function transferEscrow(address _address) external onlyOwner {\n    // ensure address is the new registered contract address\n    _escrow.transferPrimary(_address);\n  }\n\n  function paymentsFor(address _payee) external view returns(uint256) {\n    uint256 payments = _escrow.depositsOf(_payee);\n    return payments;\n  }\n\n  function deposit(address _payee) external payable {\n    _escrow.deposit.value(msg.value)(_payee);\n  }\n\n  function withdraw() external {\n    _escrow.withdraw(msg.sender);\n  }\n}\n",
  "sourcePath": "/Users/shannon/Sites/splitwisr/contracts/Cryptwise.sol",
  "ast": {
    "absolutePath": "/Users/shannon/Sites/splitwisr/contracts/Cryptwise.sol",
    "exportedSymbols": {
      "Cryptwise": [
        103
      ]
    },
    "id": 104,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/payment/escrow/Escrow.sol",
        "file": "openzeppelin-solidity/contracts/payment/escrow/Escrow.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 104,
        "sourceUnit": 546,
        "src": "26:67:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 104,
        "sourceUnit": 383,
        "src": "94:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 382,
              "src": "181:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$382",
                "typeString": "contract Ownable"
              }
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "181:7:0"
          }
        ],
        "contractDependencies": [
          382,
          545
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 103,
        "linearizedBaseContracts": [
          103,
          382
        ],
        "name": "Cryptwise",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 7,
            "name": "_escrow",
            "nodeType": "VariableDeclaration",
            "scope": 103,
            "src": "193:22:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Escrow_$545",
              "typeString": "contract Escrow"
            },
            "typeName": {
              "contractScope": null,
              "id": 6,
              "name": "Escrow",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 545,
              "src": "193:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Escrow_$545",
                "typeString": "contract Escrow"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 16,
              "nodeType": "Block",
              "src": "241:33:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 14,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10,
                      "name": "_escrow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "247:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Escrow_$545",
                        "typeString": "contract Escrow"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 12,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "257:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_creation_nonpayable$__$returns$_t_contract$_Escrow_$545_$",
                          "typeString": "function () returns (contract Escrow)"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 11,
                          "name": "Escrow",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 545,
                          "src": "261:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Escrow_$545",
                            "typeString": "contract Escrow"
                          }
                        }
                      },
                      "id": 13,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "257:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Escrow_$545",
                        "typeString": "contract Escrow"
                      }
                    },
                    "src": "247:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Escrow_$545",
                      "typeString": "contract Escrow"
                    }
                  },
                  "id": 15,
                  "nodeType": "ExpressionStatement",
                  "src": "247:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 17,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "231:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "241:0:0"
            },
            "scope": 103,
            "src": "220:54:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 28,
              "nodeType": "Block",
              "src": "337:34:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25,
                        "name": "_escrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "358:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Escrow_$545",
                          "typeString": "contract Escrow"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Escrow_$545",
                          "typeString": "contract Escrow"
                        }
                      ],
                      "id": 24,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "350:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 26,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "350:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 23,
                  "id": 27,
                  "nodeType": "Return",
                  "src": "343:23:0"
                }
              ]
            },
            "documentation": null,
            "id": 29,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [
              {
                "arguments": null,
                "id": 20,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 19,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 316,
                  "src": "310:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "310:9:0"
              }
            ],
            "name": "escrow",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "293:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 23,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "328:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "328:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "327:9:0"
            },
            "scope": 103,
            "src": "278:93:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 42,
              "nodeType": "Block",
              "src": "540:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 36,
                      "name": "_escrow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "546:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Escrow_$545",
                        "typeString": "contract Escrow"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 38,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "563:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 37,
                        "name": "Escrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 545,
                        "src": "556:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Escrow_$545_$",
                          "typeString": "type(contract Escrow)"
                        }
                      },
                      "id": 39,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "556:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Escrow_$545",
                        "typeString": "contract Escrow"
                      }
                    },
                    "src": "546:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Escrow_$545",
                      "typeString": "contract Escrow"
                    }
                  },
                  "id": 41,
                  "nodeType": "ExpressionStatement",
                  "src": "546:26:0"
                }
              ]
            },
            "documentation": "Would only need to use this in future versions of the\ncontract, to sync up the old escrow",
            "id": 43,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 34,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 33,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 316,
                  "src": "530:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "530:9:0"
              }
            ],
            "name": "setEscrow",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 43,
                  "src": "503:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "502:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "540:0:0"
            },
            "scope": 103,
            "src": "484:93:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 56,
              "nodeType": "Block",
              "src": "642:105:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 53,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "733:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 50,
                        "name": "_escrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "709:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Escrow_$545",
                          "typeString": "contract Escrow"
                        }
                      },
                      "id": 52,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferPrimary",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 446,
                      "src": "709:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55,
                  "nodeType": "ExpressionStatement",
                  "src": "709:33:0"
                }
              ]
            },
            "documentation": null,
            "id": 57,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 48,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 47,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 316,
                  "src": "632:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "632:9:0"
              }
            ],
            "name": "transferEscrow",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "605:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "605:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "604:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "642:0:0"
            },
            "scope": 103,
            "src": "581:166:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 73,
              "nodeType": "Block",
              "src": "819:77:0",
              "statements": [
                {
                  "assignments": [
                    65
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 65,
                      "name": "payments",
                      "nodeType": "VariableDeclaration",
                      "scope": 74,
                      "src": "825:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 64,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "825:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 70,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 68,
                        "name": "_payee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "863:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 66,
                        "name": "_escrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "844:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Escrow_$545",
                          "typeString": "contract Escrow"
                        }
                      },
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "depositsOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 484,
                      "src": "844:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "844:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "825:45:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 71,
                    "name": "payments",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 65,
                    "src": "883:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63,
                  "id": 72,
                  "nodeType": "Return",
                  "src": "876:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 74,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "paymentsFor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59,
                  "name": "_payee",
                  "nodeType": "VariableDeclaration",
                  "scope": 74,
                  "src": "772:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "771:16:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 63,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 74,
                  "src": "810:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "810:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "809:9:0"
            },
            "scope": 103,
            "src": "751:145:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 90,
              "nodeType": "Block",
              "src": "950:51:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "_payee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "989:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 84,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 560,
                            "src": "978:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 85,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "978:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 79,
                            "name": "_escrow",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "956:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Escrow_$545",
                              "typeString": "contract Escrow"
                            }
                          },
                          "id": 82,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "deposit",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 513,
                          "src": "956:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_payable$_t_address_$returns$__$",
                            "typeString": "function (address) payable external"
                          }
                        },
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "956:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_external_payable$_t_address_$returns$__$value_$",
                          "typeString": "function (uint256) returns (function (address) payable external)"
                        }
                      },
                      "id": 86,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "956:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_address_$returns$__$value",
                        "typeString": "function (address) payable external"
                      }
                    },
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "956:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89,
                  "nodeType": "ExpressionStatement",
                  "src": "956:40:0"
                }
              ]
            },
            "documentation": null,
            "id": 91,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 77,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "name": "_payee",
                  "nodeType": "VariableDeclaration",
                  "scope": 91,
                  "src": "917:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "916:16:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "950:0:0"
            },
            "scope": 103,
            "src": "900:101:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 101,
              "nodeType": "Block",
              "src": "1034:39:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 97,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 560,
                          "src": "1057:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1057:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "_escrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "1040:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Escrow_$545",
                          "typeString": "contract Escrow"
                        }
                      },
                      "id": 96,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 544,
                      "src": "1040:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 99,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1040:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 100,
                  "nodeType": "ExpressionStatement",
                  "src": "1040:28:0"
                }
              ]
            },
            "documentation": null,
            "id": 102,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1022:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1034:0:0"
            },
            "scope": 103,
            "src": "1005:68:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 104,
        "src": "159:916:0"
      }
    ],
    "src": "0:1076:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/shannon/Sites/splitwisr/contracts/Cryptwise.sol",
    "exportedSymbols": {
      "Cryptwise": [
        103
      ]
    },
    "id": 104,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/payment/escrow/Escrow.sol",
        "file": "openzeppelin-solidity/contracts/payment/escrow/Escrow.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 104,
        "sourceUnit": 546,
        "src": "26:67:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 104,
        "sourceUnit": 383,
        "src": "94:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 382,
              "src": "181:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$382",
                "typeString": "contract Ownable"
              }
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "181:7:0"
          }
        ],
        "contractDependencies": [
          382,
          545
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 103,
        "linearizedBaseContracts": [
          103,
          382
        ],
        "name": "Cryptwise",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 7,
            "name": "_escrow",
            "nodeType": "VariableDeclaration",
            "scope": 103,
            "src": "193:22:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Escrow_$545",
              "typeString": "contract Escrow"
            },
            "typeName": {
              "contractScope": null,
              "id": 6,
              "name": "Escrow",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 545,
              "src": "193:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Escrow_$545",
                "typeString": "contract Escrow"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 16,
              "nodeType": "Block",
              "src": "241:33:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 14,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10,
                      "name": "_escrow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "247:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Escrow_$545",
                        "typeString": "contract Escrow"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 12,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "257:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_creation_nonpayable$__$returns$_t_contract$_Escrow_$545_$",
                          "typeString": "function () returns (contract Escrow)"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 11,
                          "name": "Escrow",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 545,
                          "src": "261:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Escrow_$545",
                            "typeString": "contract Escrow"
                          }
                        }
                      },
                      "id": 13,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "257:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Escrow_$545",
                        "typeString": "contract Escrow"
                      }
                    },
                    "src": "247:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Escrow_$545",
                      "typeString": "contract Escrow"
                    }
                  },
                  "id": 15,
                  "nodeType": "ExpressionStatement",
                  "src": "247:22:0"
                }
              ]
            },
            "documentation": null,
            "id": 17,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "231:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "241:0:0"
            },
            "scope": 103,
            "src": "220:54:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 28,
              "nodeType": "Block",
              "src": "337:34:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25,
                        "name": "_escrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "358:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Escrow_$545",
                          "typeString": "contract Escrow"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Escrow_$545",
                          "typeString": "contract Escrow"
                        }
                      ],
                      "id": 24,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "350:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": "address"
                    },
                    "id": 26,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "350:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 23,
                  "id": 27,
                  "nodeType": "Return",
                  "src": "343:23:0"
                }
              ]
            },
            "documentation": null,
            "id": 29,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [
              {
                "arguments": null,
                "id": 20,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 19,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 316,
                  "src": "310:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "310:9:0"
              }
            ],
            "name": "escrow",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "293:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 23,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "328:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "328:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "327:9:0"
            },
            "scope": 103,
            "src": "278:93:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 42,
              "nodeType": "Block",
              "src": "540:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 36,
                      "name": "_escrow",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "546:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Escrow_$545",
                        "typeString": "contract Escrow"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 38,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 31,
                          "src": "563:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 37,
                        "name": "Escrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 545,
                        "src": "556:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Escrow_$545_$",
                          "typeString": "type(contract Escrow)"
                        }
                      },
                      "id": 39,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "556:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Escrow_$545",
                        "typeString": "contract Escrow"
                      }
                    },
                    "src": "546:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Escrow_$545",
                      "typeString": "contract Escrow"
                    }
                  },
                  "id": 41,
                  "nodeType": "ExpressionStatement",
                  "src": "546:26:0"
                }
              ]
            },
            "documentation": "Would only need to use this in future versions of the\ncontract, to sync up the old escrow",
            "id": 43,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 34,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 33,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 316,
                  "src": "530:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "530:9:0"
              }
            ],
            "name": "setEscrow",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 43,
                  "src": "503:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "502:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "540:0:0"
            },
            "scope": 103,
            "src": "484:93:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 56,
              "nodeType": "Block",
              "src": "642:105:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 53,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45,
                        "src": "733:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 50,
                        "name": "_escrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "709:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Escrow_$545",
                          "typeString": "contract Escrow"
                        }
                      },
                      "id": 52,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferPrimary",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 446,
                      "src": "709:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55,
                  "nodeType": "ExpressionStatement",
                  "src": "709:33:0"
                }
              ]
            },
            "documentation": null,
            "id": 57,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 48,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 47,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 316,
                  "src": "632:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "632:9:0"
              }
            ],
            "name": "transferEscrow",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "605:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "605:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "604:18:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "642:0:0"
            },
            "scope": 103,
            "src": "581:166:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 73,
              "nodeType": "Block",
              "src": "819:77:0",
              "statements": [
                {
                  "assignments": [
                    65
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 65,
                      "name": "payments",
                      "nodeType": "VariableDeclaration",
                      "scope": 74,
                      "src": "825:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 64,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "825:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 70,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 68,
                        "name": "_payee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59,
                        "src": "863:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 66,
                        "name": "_escrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "844:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Escrow_$545",
                          "typeString": "contract Escrow"
                        }
                      },
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "depositsOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 484,
                      "src": "844:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "844:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "825:45:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 71,
                    "name": "payments",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 65,
                    "src": "883:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63,
                  "id": 72,
                  "nodeType": "Return",
                  "src": "876:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 74,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "paymentsFor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59,
                  "name": "_payee",
                  "nodeType": "VariableDeclaration",
                  "scope": 74,
                  "src": "772:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "771:16:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 63,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 74,
                  "src": "810:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "810:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "809:9:0"
            },
            "scope": 103,
            "src": "751:145:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 90,
              "nodeType": "Block",
              "src": "950:51:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "_payee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 76,
                        "src": "989:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 84,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 560,
                            "src": "978:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 85,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "978:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 79,
                            "name": "_escrow",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7,
                            "src": "956:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Escrow_$545",
                              "typeString": "contract Escrow"
                            }
                          },
                          "id": 82,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "deposit",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 513,
                          "src": "956:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_payable$_t_address_$returns$__$",
                            "typeString": "function (address) payable external"
                          }
                        },
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "956:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_external_payable$_t_address_$returns$__$value_$",
                          "typeString": "function (uint256) returns (function (address) payable external)"
                        }
                      },
                      "id": 86,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "956:32:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_address_$returns$__$value",
                        "typeString": "function (address) payable external"
                      }
                    },
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "956:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 89,
                  "nodeType": "ExpressionStatement",
                  "src": "956:40:0"
                }
              ]
            },
            "documentation": null,
            "id": 91,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 77,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "name": "_payee",
                  "nodeType": "VariableDeclaration",
                  "scope": 91,
                  "src": "917:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "916:16:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "950:0:0"
            },
            "scope": 103,
            "src": "900:101:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 101,
              "nodeType": "Block",
              "src": "1034:39:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 97,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 560,
                          "src": "1057:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1057:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "_escrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7,
                        "src": "1040:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Escrow_$545",
                          "typeString": "contract Escrow"
                        }
                      },
                      "id": 96,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 544,
                      "src": "1040:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 99,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1040:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 100,
                  "nodeType": "ExpressionStatement",
                  "src": "1040:28:0"
                }
              ]
            },
            "documentation": null,
            "id": 102,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1022:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1034:0:0"
            },
            "scope": 103,
            "src": "1005:68:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 104,
        "src": "159:916:0"
      }
    ],
    "src": "0:1076:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "4447": {
      "events": {},
      "links": {},
      "address": "0x42874bcbea7b97551e0bf71f9693775bd005f76b",
      "transactionHash": "0x183ebb8b80fd326c8edb43630b317cabe790b7b7eae5b9eece3f49f6d3ede5e2"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-02T04:05:48.847Z"
}
