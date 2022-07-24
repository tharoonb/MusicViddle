/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MusicViddle,
  MusicViddleInterface,
} from "../../Lock.sol/MusicViddle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_viddlecoin",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "newHash",
        type: "bytes32",
      },
    ],
    name: "changeAnswerHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "guess",
        type: "bytes32",
      },
    ],
    name: "makeAGuess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052604051610a61380380610a61833981810160405281019061002591906101b7565b61004161003661008860201b60201c565b61009060201b60201c565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101e4565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061018482610159565b9050919050565b61019481610179565b811461019f57600080fd5b50565b6000815190506101b18161018b565b92915050565b6000602082840312156101cd576101cc610154565b5b60006101db848285016101a2565b91505092915050565b61086e806101f36000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063033cc9371461005c578063715018a6146100785780638da5cb5b14610082578063c27c0cdb146100a0578063f2fde38b146100bc575b600080fd5b610076600480360381019061007191906104fb565b6100d8565b005b6100806101e1565b005b61008a6101f5565b6040516100979190610569565b60405180910390f35b6100ba60048036038101906100b591906104fb565b61021e565b005b6100d660048036038101906100d191906105b0565b610230565b005b600154816040516020016100ec91906105ec565b6040516020818303038152906040528051906020012014156101de57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1961014e6102b4565b60016040518363ffffffff1660e01b815260040161016d929190610656565b600060405180830381600087803b15801561018757600080fd5b505af115801561019b573d6000803e3d6000fd5b505050506101dd6040518060400160405280601581526020017f596f75206775657373656420636f72726563746c7900000000000000000000008152506102bc565b5b50565b6101e9610355565b6101f360006103d3565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610226610355565b8060018190555050565b610238610355565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156102a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029f90610702565b60405180910390fd5b6102b1816103d3565b50565b600033905090565b610352816040516024016102d091906107aa565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610497565b50565b61035d6102b4565b73ffffffffffffffffffffffffffffffffffffffff1661037b6101f5565b73ffffffffffffffffffffffffffffffffffffffff16146103d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c890610818565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600080fd5b6000819050919050565b6104d8816104c5565b81146104e357600080fd5b50565b6000813590506104f5816104cf565b92915050565b600060208284031215610511576105106104c0565b5b600061051f848285016104e6565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061055382610528565b9050919050565b61056381610548565b82525050565b600060208201905061057e600083018461055a565b92915050565b61058d81610548565b811461059857600080fd5b50565b6000813590506105aa81610584565b92915050565b6000602082840312156105c6576105c56104c0565b5b60006105d48482850161059b565b91505092915050565b6105e6816104c5565b82525050565b600060208201905061060160008301846105dd565b92915050565b6000819050919050565b6000819050919050565b6000819050919050565b600061064061063b61063684610607565b61061b565b610611565b9050919050565b61065081610625565b82525050565b600060408201905061066b600083018561055a565b6106786020830184610647565b9392505050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006106ec60268361067f565b91506106f782610690565b604082019050919050565b6000602082019050818103600083015261071b816106df565b9050919050565b600081519050919050565b60005b8381101561074b578082015181840152602081019050610730565b8381111561075a576000848401525b50505050565b6000601f19601f8301169050919050565b600061077c82610722565b610786818561067f565b935061079681856020860161072d565b61079f81610760565b840191505092915050565b600060208201905081810360008301526107c48184610771565b905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061080260208361067f565b915061080d826107cc565b602082019050919050565b60006020820190508181036000830152610831816107f5565b905091905056fea264697066735822122043b22dbffb4333431ba91099cea1d84efc5f9c5222dc9b369175ccb6a08af4fb64736f6c63430008090033";

type MusicViddleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MusicViddleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MusicViddle__factory extends ContractFactory {
  constructor(...args: MusicViddleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _viddlecoin: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<MusicViddle> {
    return super.deploy(_viddlecoin, overrides || {}) as Promise<MusicViddle>;
  }
  override getDeployTransaction(
    _viddlecoin: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_viddlecoin, overrides || {});
  }
  override attach(address: string): MusicViddle {
    return super.attach(address) as MusicViddle;
  }
  override connect(signer: Signer): MusicViddle__factory {
    return super.connect(signer) as MusicViddle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MusicViddleInterface {
    return new utils.Interface(_abi) as MusicViddleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MusicViddle {
    return new Contract(address, _abi, signerOrProvider) as MusicViddle;
  }
}