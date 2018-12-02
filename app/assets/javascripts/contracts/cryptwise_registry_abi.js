CryptwiseApp.registryJson = {
  "contractName": "CryptwiseRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "registeredContract",
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
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "previousRegisteredContracts",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "RegisteredContract",
      "type": "event"
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
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "registerContract",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36106e4806100cf6000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806322a5dde4146100885780632e0cbd1d146100cb57806333ab9ff314610122578063715018a61461018f5780638da5cb5b146101a65780638f32d59b146101fd578063f2fde38b1461022c575b600080fd5b34801561009457600080fd5b506100c9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061026f565b005b3480156100d757600080fd5b506100e06103e9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012e57600080fd5b5061014d6004803603810190808035906020019092919050505061040f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019b57600080fd5b506101a461044d565b005b3480156101b257600080fd5b506101bb61051f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020957600080fd5b50610212610548565b604051808215151515815260200191505060405180910390f35b34801561023857600080fd5b5061026d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061059f565b005b610277610548565b151561028257600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156103e6576002600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167f43b47602d946530babef7f0ef9155cb7fcc55479ef678e77d07c2e4678eaa05a60405160405180910390a25b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028181548110151561041e57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610455610548565b151561046057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6105a7610548565b15156105b257600080fd5b6105bb816105be565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156105fa57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820073b51988fada652b1e2c17ed3acd1d87bf85eda5f2c969ec459f53836ad86ef0029",
  "deployedBytecode": "0x608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806322a5dde4146100885780632e0cbd1d146100cb57806333ab9ff314610122578063715018a61461018f5780638da5cb5b146101a65780638f32d59b146101fd578063f2fde38b1461022c575b600080fd5b34801561009457600080fd5b506100c9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061026f565b005b3480156100d757600080fd5b506100e06103e9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012e57600080fd5b5061014d6004803603810190808035906020019092919050505061040f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019b57600080fd5b506101a461044d565b005b3480156101b257600080fd5b506101bb61051f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020957600080fd5b50610212610548565b604051808215151515815260200191505060405180910390f35b34801561023857600080fd5b5061026d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061059f565b005b610277610548565b151561028257600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156103e6576002600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167f43b47602d946530babef7f0ef9155cb7fcc55479ef678e77d07c2e4678eaa05a60405160405180910390a25b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60028181548110151561041e57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610455610548565b151561046057600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6105a7610548565b15156105b257600080fd5b6105bb816105be565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156105fa57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820073b51988fada652b1e2c17ed3acd1d87bf85eda5f2c969ec459f53836ad86ef0029",
  "sourceMap": "91:438:1:-;;;518:10:3;509:6;;:19;;;;;;;;;;;;;;;;;;572:6;;;;;;;;;;;539:40;;568:1;539:40;;;;;;;;;;;;91:438:1;;;;;;",
  "deployedSourceMap": "91:438:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;274:253;;8:9:-1;5:2;;;30:1;27;20:12;5:2;274:253:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;133:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;133:33:1;;;;;;;;;;;;;;;;;;;;;;;;;;;170:44;;8:9:-1;5:2;;;30:1;27;20:12;5:2;170:44:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1273:127:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1273:127:3;;;;;;639:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;639:70:3;;;;;;;;;;;;;;;;;;;;;;;;;;;926:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;926:83:3;;;;;;;;;;;;;;;;;;;;;;;;;;;1561:101;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1561:101:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;274:253:1;824:9:3;:7;:9::i;:::-;816:18;;;;;;;;358::1;;;;;;;;;;;346:30;;:8;:30;;;;343:180;;;386:27;419:18;;;;;;;;;;;386:52;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;386:52:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;467:8;446:18;;:29;;;;;;;;;;;;;;;;;;507:8;488:28;;;;;;;;;;;;343:180;274:253;:::o;133:33::-;;;;;;;;;;;;;:::o;170:44::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1273:127:3:-;824:9;:7;:9::i;:::-;816:18;;;;;;;;1367:1;1330:40;;1351:6;;;;;;;;;;;1330:40;;;;;;;;;;;;1393:1;1376:6;;:19;;;;;;;;;;;;;;;;;;1273:127::o;639:70::-;676:7;698:6;;;;;;;;;;;691:13;;639:70;:::o;926:83::-;965:4;998:6;;;;;;;;;;;984:20;;:10;:20;;;977:27;;926:83;:::o;1561:101::-;824:9;:7;:9::i;:::-;816:18;;;;;;;;1629:28;1648:8;1629:18;:28::i;:::-;1561:101;:::o;1796:169::-;1885:1;1865:22;;:8;:22;;;;1857:31;;;;;;;;1928:8;1899:38;;1920:6;;;;;;;;;;;1899:38;;;;;;;;;;;;1952:8;1943:6;;:17;;;;;;;;;;;;;;;;;;1796:169;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\n\ncontract CryptwiseRegistry is Ownable {\n  address public registeredContract;\n  address[] public previousRegisteredContracts;\n\n  event RegisteredContract(address indexed _address);\n\n  function registerContract(address _address) external onlyOwner {\n    if(_address != registeredContract) {\n      previousRegisteredContracts.push(registeredContract);\n      registeredContract = _address;\n      emit RegisteredContract(_address);\n    }\n  }\n}\n",
  "sourcePath": "/Users/shannon/Sites/splitwisr/contracts/CryptwiseRegistry.sol",
  "ast": {
    "absolutePath": "/Users/shannon/Sites/splitwisr/contracts/CryptwiseRegistry.sol",
    "exportedSymbols": {
      "CryptwiseRegistry": [
        145
      ]
    },
    "id": 146,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 105,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 106,
        "nodeType": "ImportDirective",
        "scope": 146,
        "sourceUnit": 383,
        "src": "26:63:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 107,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 382,
              "src": "121:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$382",
                "typeString": "contract Ownable"
              }
            },
            "id": 108,
            "nodeType": "InheritanceSpecifier",
            "src": "121:7:1"
          }
        ],
        "contractDependencies": [
          382
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 145,
        "linearizedBaseContracts": [
          145,
          382
        ],
        "name": "CryptwiseRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 110,
            "name": "registeredContract",
            "nodeType": "VariableDeclaration",
            "scope": 145,
            "src": "133:33:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 109,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "133:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 113,
            "name": "previousRegisteredContracts",
            "nodeType": "VariableDeclaration",
            "scope": 145,
            "src": "170:44:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 111,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "170:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 112,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "170:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 117,
            "name": "RegisteredContract",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 115,
                  "indexed": true,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "244:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 114,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "244:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "243:26:1"
            },
            "src": "219:51:1"
          },
          {
            "body": {
              "id": 143,
              "nodeType": "Block",
              "src": "337:190:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "346:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 125,
                      "name": "registeredContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110,
                      "src": "358:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "346:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 142,
                  "nodeType": "IfStatement",
                  "src": "343:180:1",
                  "trueBody": {
                    "id": 141,
                    "nodeType": "Block",
                    "src": "378:145:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 130,
                              "name": "registeredContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 110,
                              "src": "419:18:1",
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
                              "id": 127,
                              "name": "previousRegisteredContracts",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 113,
                              "src": "386:27:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "386:32:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) returns (uint256)"
                            }
                          },
                          "id": 131,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "386:52:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 132,
                        "nodeType": "ExpressionStatement",
                        "src": "386:52:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 133,
                            "name": "registeredContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 110,
                            "src": "446:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 134,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119,
                            "src": "467:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "446:29:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 136,
                        "nodeType": "ExpressionStatement",
                        "src": "446:29:1"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 138,
                              "name": "_address",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 119,
                              "src": "507:8:1",
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
                            "id": 137,
                            "name": "RegisteredContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 117,
                            "src": "488:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                              "typeString": "function (address)"
                            }
                          },
                          "id": 139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "488:28:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 140,
                        "nodeType": "EmitStatement",
                        "src": "483:33:1"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 144,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 122,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 121,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 316,
                  "src": "327:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "327:9:1"
              }
            ],
            "name": "registerContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 119,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 144,
                  "src": "300:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 118,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "300:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "299:18:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:1"
            },
            "scope": 145,
            "src": "274:253:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 146,
        "src": "91:438:1"
      }
    ],
    "src": "0:530:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/shannon/Sites/splitwisr/contracts/CryptwiseRegistry.sol",
    "exportedSymbols": {
      "CryptwiseRegistry": [
        145
      ]
    },
    "id": 146,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 105,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 106,
        "nodeType": "ImportDirective",
        "scope": 146,
        "sourceUnit": 383,
        "src": "26:63:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 107,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 382,
              "src": "121:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$382",
                "typeString": "contract Ownable"
              }
            },
            "id": 108,
            "nodeType": "InheritanceSpecifier",
            "src": "121:7:1"
          }
        ],
        "contractDependencies": [
          382
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 145,
        "linearizedBaseContracts": [
          145,
          382
        ],
        "name": "CryptwiseRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 110,
            "name": "registeredContract",
            "nodeType": "VariableDeclaration",
            "scope": 145,
            "src": "133:33:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 109,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "133:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 113,
            "name": "previousRegisteredContracts",
            "nodeType": "VariableDeclaration",
            "scope": 145,
            "src": "170:44:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 111,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "170:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 112,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "170:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 117,
            "name": "RegisteredContract",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 115,
                  "indexed": true,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "244:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 114,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "244:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "243:26:1"
            },
            "src": "219:51:1"
          },
          {
            "body": {
              "id": 143,
              "nodeType": "Block",
              "src": "337:190:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "346:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 125,
                      "name": "registeredContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 110,
                      "src": "358:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "346:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 142,
                  "nodeType": "IfStatement",
                  "src": "343:180:1",
                  "trueBody": {
                    "id": 141,
                    "nodeType": "Block",
                    "src": "378:145:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 130,
                              "name": "registeredContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 110,
                              "src": "419:18:1",
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
                              "id": 127,
                              "name": "previousRegisteredContracts",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 113,
                              "src": "386:27:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "386:32:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) returns (uint256)"
                            }
                          },
                          "id": 131,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "386:52:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 132,
                        "nodeType": "ExpressionStatement",
                        "src": "386:52:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 133,
                            "name": "registeredContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 110,
                            "src": "446:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 134,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 119,
                            "src": "467:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "446:29:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 136,
                        "nodeType": "ExpressionStatement",
                        "src": "446:29:1"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 138,
                              "name": "_address",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 119,
                              "src": "507:8:1",
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
                            "id": 137,
                            "name": "RegisteredContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 117,
                            "src": "488:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                              "typeString": "function (address)"
                            }
                          },
                          "id": 139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "488:28:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 140,
                        "nodeType": "EmitStatement",
                        "src": "483:33:1"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 144,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 122,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 121,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 316,
                  "src": "327:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "327:9:1"
              }
            ],
            "name": "registerContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 119,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 144,
                  "src": "300:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 118,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "300:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "299:18:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:1"
            },
            "scope": 145,
            "src": "274:253:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 146,
        "src": "91:438:1"
      }
    ],
    "src": "0:530:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "4447": {
      "events": {},
      "links": {},
      "address": "0x432adf73ac67ff0810eae7dec53dbf077f228a6e",
      "transactionHash": "0xa03df7d9b867eb89e1f59e5b29ea0364c3d5af3f783c3589e965e02316d65a3c"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-02T04:05:48.675Z"
}
