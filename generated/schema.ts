// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("spender", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ExampleEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ExampleEntity", id.toString(), this);
    }
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    return value!.toBytes();
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }
}

export class JGLPStrategyMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("isoTimestamp", Value.fromString(""));
    this.set("maxLeverage", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("minLeverage", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("targetLeverage", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("leverage", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("underlyingGlp", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("underlyingGlpValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("stableDebt", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("glpPrice", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalUSDC", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save JGLPStrategyMetric entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save JGLPStrategyMetric entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("JGLPStrategyMetric", id.toString(), this);
    }
  }

  static load(id: string): JGLPStrategyMetric | null {
    return changetype<JGLPStrategyMetric | null>(
      store.get("JGLPStrategyMetric", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get isoTimestamp(): string {
    let value = this.get("isoTimestamp");
    return value!.toString();
  }

  set isoTimestamp(value: string) {
    this.set("isoTimestamp", Value.fromString(value));
  }

  get maxLeverage(): BigDecimal {
    let value = this.get("maxLeverage");
    return value!.toBigDecimal();
  }

  set maxLeverage(value: BigDecimal) {
    this.set("maxLeverage", Value.fromBigDecimal(value));
  }

  get minLeverage(): BigDecimal {
    let value = this.get("minLeverage");
    return value!.toBigDecimal();
  }

  set minLeverage(value: BigDecimal) {
    this.set("minLeverage", Value.fromBigDecimal(value));
  }

  get targetLeverage(): BigDecimal {
    let value = this.get("targetLeverage");
    return value!.toBigDecimal();
  }

  set targetLeverage(value: BigDecimal) {
    this.set("targetLeverage", Value.fromBigDecimal(value));
  }

  get leverage(): BigDecimal {
    let value = this.get("leverage");
    return value!.toBigDecimal();
  }

  set leverage(value: BigDecimal) {
    this.set("leverage", Value.fromBigDecimal(value));
  }

  get underlyingGlp(): BigDecimal {
    let value = this.get("underlyingGlp");
    return value!.toBigDecimal();
  }

  set underlyingGlp(value: BigDecimal) {
    this.set("underlyingGlp", Value.fromBigDecimal(value));
  }

  get underlyingGlpValue(): BigDecimal {
    let value = this.get("underlyingGlpValue");
    return value!.toBigDecimal();
  }

  set underlyingGlpValue(value: BigDecimal) {
    this.set("underlyingGlpValue", Value.fromBigDecimal(value));
  }

  get stableDebt(): BigDecimal {
    let value = this.get("stableDebt");
    return value!.toBigDecimal();
  }

  set stableDebt(value: BigDecimal) {
    this.set("stableDebt", Value.fromBigDecimal(value));
  }

  get glpPrice(): BigDecimal {
    let value = this.get("glpPrice");
    return value!.toBigDecimal();
  }

  set glpPrice(value: BigDecimal) {
    this.set("glpPrice", Value.fromBigDecimal(value));
  }

  get totalUSDC(): BigDecimal {
    let value = this.get("totalUSDC");
    return value!.toBigDecimal();
  }

  set totalUSDC(value: BigDecimal) {
    this.set("totalUSDC", Value.fromBigDecimal(value));
  }
}

export class IncentiveMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("WETHBalance", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WETHPrice", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WETHValue", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save IncentiveMetric entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save IncentiveMetric entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("IncentiveMetric", id.toString(), this);
    }
  }

  static load(id: string): IncentiveMetric | null {
    return changetype<IncentiveMetric | null>(store.get("IncentiveMetric", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get WETHBalance(): BigDecimal {
    let value = this.get("WETHBalance");
    return value!.toBigDecimal();
  }

  set WETHBalance(value: BigDecimal) {
    this.set("WETHBalance", Value.fromBigDecimal(value));
  }

  get WETHPrice(): BigDecimal {
    let value = this.get("WETHPrice");
    return value!.toBigDecimal();
  }

  set WETHPrice(value: BigDecimal) {
    this.set("WETHPrice", Value.fromBigDecimal(value));
  }

  get WETHValue(): BigDecimal {
    let value = this.get("WETHValue");
    return value!.toBigDecimal();
  }

  set WETHValue(value: BigDecimal) {
    this.set("WETHValue", Value.fromBigDecimal(value));
  }
}