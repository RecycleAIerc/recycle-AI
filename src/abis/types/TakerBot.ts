/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export type TrustusPacketStruct = {
  v: BigNumberish;
  r: BytesLike;
  s: BytesLike;
  request: BytesLike;
  deadline: BigNumberish;
  payload: BytesLike;
};

export type TrustusPacketStructOutput = [
  number,
  string,
  string,
  string,
  BigNumber,
  string
] & {
  v: number;
  r: string;
  s: string;
  request: string;
  deadline: BigNumber;
  payload: string;
};

export interface TakerBotInterface extends utils.Interface {
  functions: {
    "DUSTSWEEPER_ADDRESS()": FunctionFragment;
    "ONE_INCH_ROUTER()": FunctionFragment;
    "acceptOwnershipTransfer()": FunctionFragment;
    "commitOwnershipTransfer(address)": FunctionFragment;
    "futureOwner()": FunctionFragment;
    "isApproved(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "payoutEth()": FunctionFragment;
    "runSweep(address[],address[],(uint8,bytes32,bytes32,bytes32,uint256,bytes),address[],bytes[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DUSTSWEEPER_ADDRESS"
      | "ONE_INCH_ROUTER"
      | "acceptOwnershipTransfer"
      | "commitOwnershipTransfer"
      | "futureOwner"
      | "isApproved"
      | "owner"
      | "payoutEth"
      | "runSweep"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DUSTSWEEPER_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ONE_INCH_ROUTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnershipTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commitOwnershipTransfer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "futureOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isApproved",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "payoutEth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "runSweep",
    values: [string[], string[], TrustusPacketStruct, string[], BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "DUSTSWEEPER_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ONE_INCH_ROUTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commitOwnershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "futureOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isApproved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payoutEth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "runSweep", data: BytesLike): Result;

  events: {};
}

export interface TakerBot extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TakerBotInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DUSTSWEEPER_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    ONE_INCH_ROUTER(overrides?: CallOverrides): Promise<[string]>;

    acceptOwnershipTransfer(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    commitOwnershipTransfer(
      _futureOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    futureOwner(overrides?: CallOverrides): Promise<[string]>;

    isApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    payoutEth(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    runSweep(
      makers: string[],
      tokenAddresses: string[],
      packet: TrustusPacketStruct,
      uniqueTokenAddresses: string[],
      oneinchCallDataByToken: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  DUSTSWEEPER_ADDRESS(overrides?: CallOverrides): Promise<string>;

  ONE_INCH_ROUTER(overrides?: CallOverrides): Promise<string>;

  acceptOwnershipTransfer(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  commitOwnershipTransfer(
    _futureOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  futureOwner(overrides?: CallOverrides): Promise<string>;

  isApproved(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  payoutEth(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  runSweep(
    makers: string[],
    tokenAddresses: string[],
    packet: TrustusPacketStruct,
    uniqueTokenAddresses: string[],
    oneinchCallDataByToken: BytesLike[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    DUSTSWEEPER_ADDRESS(overrides?: CallOverrides): Promise<string>;

    ONE_INCH_ROUTER(overrides?: CallOverrides): Promise<string>;

    acceptOwnershipTransfer(overrides?: CallOverrides): Promise<boolean>;

    commitOwnershipTransfer(
      _futureOwner: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    futureOwner(overrides?: CallOverrides): Promise<string>;

    isApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    payoutEth(overrides?: CallOverrides): Promise<void>;

    runSweep(
      makers: string[],
      tokenAddresses: string[],
      packet: TrustusPacketStruct,
      uniqueTokenAddresses: string[],
      oneinchCallDataByToken: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    DUSTSWEEPER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_INCH_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnershipTransfer(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    commitOwnershipTransfer(
      _futureOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    futureOwner(overrides?: CallOverrides): Promise<BigNumber>;

    isApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    payoutEth(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    runSweep(
      makers: string[],
      tokenAddresses: string[],
      packet: TrustusPacketStruct,
      uniqueTokenAddresses: string[],
      oneinchCallDataByToken: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DUSTSWEEPER_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ONE_INCH_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnershipTransfer(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    commitOwnershipTransfer(
      _futureOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    futureOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payoutEth(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    runSweep(
      makers: string[],
      tokenAddresses: string[],
      packet: TrustusPacketStruct,
      uniqueTokenAddresses: string[],
      oneinchCallDataByToken: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}