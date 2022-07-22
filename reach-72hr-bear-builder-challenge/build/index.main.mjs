// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _Attacher_submitAddress4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attacher_submitAddress4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attacher_submitAddress4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v121] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2]);
  const v135 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:28:38:application call to [unknown function] (defined at: ./index.rsh:28:38:function exp)', 'at ./index.rsh:28:38:application call to [unknown function] (defined at: ./index.rsh:28:38:function exp)'],
    msg: 'in',
    who: 'Attacher_submitAddress'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v121, v135],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v139], secs: v141, time: v140, didSend: v65, from: v138 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Attacher_submitAddress"
        });
      ;
      const v143 = stdlib.le(v121, stdlib.checkedBigNumberify('./index.rsh:30:21:decimal', stdlib.UInt_max, '5'));
      if (v143) {
        const v144 = await txn1.getOutput('Attacher_submitAddress', 'v121', ctc2, v121);
        
        await stdlib.simMapSet(sim_r, 0, v138, null);
        const v152 = stdlib.add(v121, stdlib.checkedBigNumberify('./index.rsh:39:26:decimal', stdlib.UInt_max, '1'));
        const v252 = v152;
        const v254 = stdlib.gt(v152, stdlib.checkedBigNumberify('./index.rsh:27:21:decimal', stdlib.UInt_max, '0'));
        if (v254) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v154 = await txn1.getOutput('Attacher_submitAddress', 'v121', ctc2, v121);
        
        const v161 = stdlib.add(v121, stdlib.checkedBigNumberify('./index.rsh:39:26:decimal', stdlib.UInt_max, '1'));
        const v255 = v161;
        const v257 = stdlib.gt(v161, stdlib.checkedBigNumberify('./index.rsh:27:21:decimal', stdlib.UInt_max, '0'));
        if (v257) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v139], secs: v141, time: v140, didSend: v65, from: v138 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v143 = stdlib.le(v121, stdlib.checkedBigNumberify('./index.rsh:30:21:decimal', stdlib.UInt_max, '5'));
  if (v143) {
    const v144 = await txn1.getOutput('Attacher_submitAddress', 'v121', ctc2, v121);
    if (v65) {
      stdlib.protect(ctc0, await interact.out(v139, v144), {
        at: './index.rsh:28:11:application',
        fs: ['at ./index.rsh:28:11:application call to [unknown function] (defined at: ./index.rsh:28:11:function exp)', 'at ./index.rsh:31:12:application call to "k" (defined at: ./index.rsh:29:23:function exp)', 'at ./index.rsh:29:23:application call to [unknown function] (defined at: ./index.rsh:29:23:function exp)'],
        msg: 'out',
        who: 'Attacher_submitAddress'
        });
      }
    else {
      }
    
    await stdlib.mapSet(map0, v138, null);
    const v152 = stdlib.add(v121, stdlib.checkedBigNumberify('./index.rsh:39:26:decimal', stdlib.UInt_max, '1'));
    const v252 = v152;
    const v254 = stdlib.gt(v152, stdlib.checkedBigNumberify('./index.rsh:27:21:decimal', stdlib.UInt_max, '0'));
    if (v254) {
      return;
      }
    else {
      return;
      }}
  else {
    const v154 = await txn1.getOutput('Attacher_submitAddress', 'v121', ctc2, v121);
    if (v65) {
      stdlib.protect(ctc0, await interact.out(v139, v154), {
        at: './index.rsh:28:11:application',
        fs: ['at ./index.rsh:28:11:application call to [unknown function] (defined at: ./index.rsh:28:11:function exp)', 'at ./index.rsh:36:12:application call to "k" (defined at: ./index.rsh:29:23:function exp)', 'at ./index.rsh:29:23:application call to [unknown function] (defined at: ./index.rsh:29:23:function exp)'],
        msg: 'out',
        who: 'Attacher_submitAddress'
        });
      }
    else {
      }
    
    const v161 = stdlib.add(v121, stdlib.checkedBigNumberify('./index.rsh:39:26:decimal', stdlib.UInt_max, '1'));
    const v255 = v161;
    const v257 = stdlib.gt(v161, stdlib.checkedBigNumberify('./index.rsh:27:21:decimal', stdlib.UInt_max, '0'));
    if (v257) {
      return;
      }
    else {
      return;
      }}
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:17:19:application',
    fs: ['at ./index.rsh:16:15:application call to [unknown function] (defined at: ./index.rsh:16:19:function exp)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v116, time: v115, didSend: v25, from: v114 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v116, time: v115, didSend: v25, from: v114 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v114],
    evt_cnt: 0,
    funcNum: 1,
    lct: v115,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v119, time: v118, didSend: v31, from: v117 } = txn2;
      
      ;
      const v121 = stdlib.checkedBigNumberify('./index.rsh:25:21:decimal', stdlib.UInt_max, '1');
      const v122 = v118;
      
      if (await (async () => {
        const v132 = stdlib.gt(v121, stdlib.checkedBigNumberify('./index.rsh:27:21:decimal', stdlib.UInt_max, '0'));
        
        return v132;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v119, time: v118, didSend: v31, from: v117 } = txn2;
  ;
  const v120 = stdlib.addressEq(v114, v117);
  stdlib.assert(v120, {
    at: './index.rsh:23:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  let v121 = stdlib.checkedBigNumberify('./index.rsh:25:21:decimal', stdlib.UInt_max, '1');
  let v122 = v118;
  
  while (await (async () => {
    const v132 = stdlib.gt(v121, stdlib.checkedBigNumberify('./index.rsh:27:21:decimal', stdlib.UInt_max, '0'));
    
    return v132;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v139], secs: v141, time: v140, didSend: v65, from: v138 } = txn3;
    undefined /* setApiDetails */;
    ;
    const v143 = stdlib.le(v121, stdlib.checkedBigNumberify('./index.rsh:30:21:decimal', stdlib.UInt_max, '5'));
    if (v143) {
      await txn3.getOutput('Attacher_submitAddress', 'v121', ctc3, v121);
      await stdlib.mapSet(map0, v138, null);
      const v151 = {
        Address: v138,
        Bool: true
        };
      stdlib.protect(ctc0, await interact.seeAttacher(v151), {
        at: './index.rsh:33:40:application',
        fs: ['at ./index.rsh:33:40:application call to [unknown function] (defined at: ./index.rsh:33:40:function exp)', 'at ./index.rsh:33:40:application call to "liftedInteract" (defined at: ./index.rsh:33:40:application)', 'at ./index.rsh:29:23:application call to [unknown function] (defined at: ./index.rsh:29:23:function exp)'],
        msg: 'seeAttacher',
        who: 'Deployer'
        });
      
      const v152 = stdlib.add(v121, stdlib.checkedBigNumberify('./index.rsh:39:26:decimal', stdlib.UInt_max, '1'));
      const cv121 = v152;
      const cv122 = v140;
      
      v121 = cv121;
      v122 = cv122;
      
      continue;}
    else {
      await txn3.getOutput('Attacher_submitAddress', 'v121', ctc3, v121);
      const v160 = {
        Address: v138,
        Bool: false
        };
      stdlib.protect(ctc0, await interact.seeAttacher(v160), {
        at: './index.rsh:37:40:application',
        fs: ['at ./index.rsh:37:40:application call to [unknown function] (defined at: ./index.rsh:37:40:function exp)', 'at ./index.rsh:37:40:application call to "liftedInteract" (defined at: ./index.rsh:37:40:application)', 'at ./index.rsh:29:23:application call to [unknown function] (defined at: ./index.rsh:29:23:function exp)'],
        msg: 'seeAttacher',
        who: 'Deployer'
        });
      
      const v161 = stdlib.add(v121, stdlib.checkedBigNumberify('./index.rsh:39:26:decimal', stdlib.UInt_max, '1'));
      const cv121 = v161;
      const cv122 = v140;
      
      v121 = cv121;
      v122 = cv122;
      
      continue;}
    
    }
  return;
  
  
  
  
  };
export async function Attacher_submitAddress(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher_submitAddress expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher_submitAddress expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Attacher_submitAddress4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Attacher_submitAddress()uint64`],
    pure: [],
    sigs: [`Attacher_submitAddress()uint64`]
    },
  appApproval: `BiAFAAEDBAUmAwEAAAgAAAAAAAAAeSI1ADEYQQF+KWRJIls1AYEIWzUCMRkjEkEACDEAKChmQgFMNhoAF0lBABIiNQQjNQaB6J6i7wwSRClCABw2GgIXNQQ2GgM2GgEXSSMMQACRSSQMQABhJBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDFzX/STUFNf6ABMiaD7s0/lCwNP8hBA5BABsqNP8WULA0/xY1BzEAKIABAWY0/yMIMgZCAHEqNP8WULA0/xY1BzT/IwgyBkIAXSMSRCM0ARJENARJIhJMNAISEUQoZDUDgASai5F0sDQDMQASRCMyBkIAM0iBoI0GiAC7IjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAxAChLAVcAIGdIIzUBMgY1AkIAPjX/STX+Ig1BABU0/hYoSwFXAAhnSCU1ATIGNQJCAB9CAAAxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v139",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v121",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Attacher_submitAddress",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v139",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000de438038062000de48339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b610b88806200025c6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100db578063ab53f2c6146100f0578063dc4b32c114610113578063e2186a081461011b57005b80631e93b0f1146100775780632c10a1591461009b5780633bc5b7bf146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610890565b61012e565b3480156100ba57600080fd5b506100ce6100c93660046108c8565b610159565b60405161009291906108fb565b3480156100e757600080fd5b50600154610088565b3480156100fc57600080fd5b50610105610185565b604051610092929190610942565b610088610222565b610075610129366004610890565b610254565b60408051602081019091526000815261015561014f36849003840184610a17565b8261027b565b5050565b604080516060810182526000808252602082018190529181019190915261017f826103df565b92915050565b60006060600054600280805461019a90610a4d565b80601f01602080910402602001604051908101604052809291908181526020018280546101c690610a4d565b80156102135780601f106101e857610100808354040283529160200191610213565b820191906000526020600020905b8154815290600101906020018083116101f657829003601f168201915b50505050509050915091509091565b600061022c610749565b602080820151600090819052604080519283019052815261024d82826104b8565b5192915050565b60408051602081019091526000815261015561027536849003840184610a82565b826104b8565b61028b600160005414600a6106ad565b81516102a690158061029f57508251600154145b600b6106ad565b6000808055600280546102b890610a4d565b80601f01602080910402602001604051908101604052809291908181526020018280546102e490610a4d565b80156103315780601f1061030657610100808354040283529160200191610331565b820191906000526020600020905b81548152906001019060200180831161031457829003601f168201915b50505050508060200190518101906103499190610ada565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16103a0341560086106ad565b80516103b8906001600160a01b0316331460096106ad565b6103c0610778565b602080820180516001905251439101526103d9816106d2565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561042b5761042b6108e5565b14156104a8576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561046c5761046c6108e5565b600181111561047d5761047d6108e5565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b6104c8600460005414600d6106ad565b81516104e39015806104dc57508251600154145b600e6106ad565b6000808055600280546104f590610a4d565b80601f016020809104026020016040519081016040528092919081815260200182805461052190610a4d565b801561056e5780601f106105435761010080835404028352916020019161056e565b820191906000526020600020905b81548152906001019060200180831161055157829003601f168201915b50505050508060200190518101906105869190610b08565b6040805133815285516020808301919091528601515115158183015290519192507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e35919081900360600190a16105de3415600c6106ad565b805160051061066c5780516040519081527f9533425b29f30160a29d304cf2590d968d95c86447f40ff82cd2c381bb499c649060200160405180910390a180518252336000908152600460205260409020805462ff00ff19166001179055610644610778565b815161065290600190610b2c565b60208083018051929092529051439101526103d9816106d2565b80516040519081527f9533425b29f30160a29d304cf2590d968d95c86447f40ff82cd2c381bb499c649060200160405180910390a180518252610644610778565b816101555760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208101515115610730576040805160208082018352600080835284820151518084526004909155436001558351918201529091016040516020818303038152906040526002908051906020019061072b9291906107a9565b505050565b600080805560018190556107469060029061082d565b50565b60405180604001604052806000815260200161077360405180602001604052806000151581525090565b905290565b6040518060400160405280600015158152602001610773604051806040016040528060008152602001600081525090565b8280546107b590610a4d565b90600052602060002090601f0160209004810192826107d7576000855561081d565b82601f106107f057805160ff191683800117855561081d565b8280016001018555821561081d579182015b8281111561081d578251825591602001919060010190610802565b50610829929150610863565b5090565b50805461083990610a4d565b6000825580601f10610849575050565b601f01602090049060005260206000209081019061074691905b5b808211156108295760008155600101610864565b60006040828403121561088a57600080fd5b50919050565b6000604082840312156108a257600080fd5b6108ac8383610878565b9392505050565b6001600160a01b038116811461074657600080fd5b6000602082840312156108da57600080fd5b81356108ac816108b3565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061092057634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b818110156109765785810183015185820160600152820161095a565b81811115610988576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff811182821017156109d057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156109d057634e487b7160e01b600052604160045260246000fd5b803580151581146104b357600080fd5b600060408284031215610a2957600080fd5b610a3161099f565b82358152610a4160208401610a07565b60208201529392505050565b600181811c90821680610a6157607f821691505b6020821081141561088a57634e487b7160e01b600052602260045260246000fd5b60008183036040811215610a9557600080fd5b610a9d61099f565b833581526020601f1983011215610ab357600080fd5b610abb6109d6565b9150610ac960208501610a07565b825260208101919091529392505050565b600060208284031215610aec57600080fd5b610af46109d6565b8251610aff816108b3565b81529392505050565b600060208284031215610b1a57600080fd5b610b226109d6565b9151825250919050565b60008219821115610b4d57634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212206f9264272b5dadbe9c67e8611cbc3feb94b3535e296fddd384012ee3178902d664736f6c634300080c0033`,
  BytecodeLen: 3556,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:22:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:42:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:25:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Attacher_submitAddress": Attacher_submitAddress,
  "Deployer": Deployer
  };
export const _APIs = {
  Attacher: {
    submitAddress: Attacher_submitAddress
    }
  };
