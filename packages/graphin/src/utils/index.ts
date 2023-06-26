import { cloneDeep, merge, uniqBy } from 'lodash-es';
import { layouts } from '../layout/utils/options';
import getComboStyleByTheme from '../theme/combo-style';
import getEdgeStyleByTheme from '../theme/edge-style';
import getNodeStyleByTheme from '../theme/node-style';
import calcByteLength from './calcByteLength';
import debug from './debug';
import hexToRgba, { hexToRgbaToHex } from './hexToRgba';
import mock from './mock';
import processEdges from './processEdges';
import { getEnumDataMap, getEnumValue } from './processGraphData';
import shallowEqual from './shallowEqual';
import uuid from './uuid';
import walk from './walk';

export default {
  hexToRgba,
  debug,
  mock,
  shallowEqual,
  hexToRgbaToHex,
  getNodeStyleByTheme,
  getEdgeStyleByTheme,
  getComboStyleByTheme,
  deepMix: merge,
  cloneDeep,
  uuid,
  walk,
  processEdges,
  calcByteLength,
  layouts,
  uniqBy,
  getEnumDataMap,
  getEnumValue,
};
