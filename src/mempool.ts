import { Block } from "./block";
import { logger } from "./logger";
import { chainManager } from './chain'
import { UTXOSet, UTXO } from './utxo'


class MempoolManager {

  mempool: string[] = []

  init() {
  }
}

export const mempoolManager = new MempoolManager()
