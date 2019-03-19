export interface ITArea {
  id?: number;
  name: string;
  diseases: IDisease[];
}

export interface IDisease {
  id?: number;
  parameterName: string;
  primaryName: string;
  secondaryName: string;
  trials: ITrials[];
}

export interface ITrials {
  parameterName: string;
  id?: number;
  name: string;
  phase: string;
  compoundInfo: ICompoundInfo;
  details: Array<any>;
  footnotes: Array<any>;
}

export interface ICompoundInfo {
  compoundCount?: number;
  id?: number;
  primaryName: string;
  secondaryName: string;
}
