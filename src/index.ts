import { logger } from './logger'
import { network } from './network'
import { chainManager } from './chain'
import { mempoolManager } from './mempool'

const BIND_PORT = 18018
const BIND_IP = '149.28.219.230'

logger.info(`Malibu - A Marabu node`)
logger.info(`Sam Liokumovich <samliok@stanford.edu>`)

chainManager.init()
mempoolManager.init()
network.init(BIND_PORT, BIND_IP)
