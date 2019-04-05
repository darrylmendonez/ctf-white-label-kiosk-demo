import {
  ITArea,
  IDisease,
  ITrials,
  ICompoundInfo,
} from '../models/trial.model';

export const CompoundInfoData: ICompoundInfo[] = [
  {
    compoundCount: 1,
    primaryName: 'AB 123456<sup>*</sup>',
    secondaryName: 'Alpha-FO-27R mAb',
  },
  {
    compoundCount: 1,
    primaryName: 'CD 789012<sup>*</sup>',
    secondaryName: 'Bravo-LJ-21F mAb',
  },
  {
    compoundCount: 1,
    primaryName: 'EF 345678<sup>*</sup>',
    secondaryName: 'Charlie-MOF-31',
  },
  {
    compoundCount: 1,
    primaryName: 'GH 901234<sup>*</sup>',
    secondaryName: 'Delta-JU-43K mAb',
  },
  {
    compoundCount: 1,
    primaryName: 'IJ 567890<sup>*</sup>',
    secondaryName: 'Echo-JK-54K mAb',
  },
  {
    compoundCount: 1,
    primaryName: 'KL 123456<sup>*</sup><sup>&#0134;</sup>',
    secondaryName: 'Foxtrot-BM50 mAb',
  },
  {
    compoundCount: 1,
    primaryName: 'MN<sup>*</sup>',
    secondaryName: 'Golf hotel india',
  },
  {
    compoundCount: 1,
    primaryName: 'Juliet<sup>*</sup>',
    secondaryName: 'Kilo lima michael',
  },
];

export const TrialsData: ITrials[] = [
  {
    parameterName: 'li',
    name: '1234-5678',
    phase: 'II',
    compoundInfo: CompoundInfoData[0],
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    parameterName: 'lorem',
    name: '9012-3456',
    phase: 'IIa',
    compoundInfo: CompoundInfoData[1],
    details: [
      'Quia dolor sit amet',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    parameterName: 'ipsum',
    name: '7890-1234',
    phase: 'II',
    compoundInfo: CompoundInfoData[2],
    details: [
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur',
      'Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
      'Et harum quidem:',
      [
        'Perum facilis est et expedita distinctio',
        'Nam libero tempore'
      ],
      'Scum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus',
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    parameterName: 'dolor1',
    name: '5678-9012',
    phase: 'II',
    compoundInfo: CompoundInfoData[3],
    details: [
      'Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
      'Quis autem vel eum',
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    parameterName: 'dolor2',
    name: '3456-7890',
    phase: 'II/III',
    compoundInfo: CompoundInfoData[3],
    details: [
      'Siure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur',
      'Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
      [
        'At vero eos et accusamus et iusto',
        'Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
      ],
      'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga',
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    parameterName: 'dolor3',
    name: '9876-5432',
    phase: 'II',
    compoundInfo: CompoundInfoData[3],
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    parameterName: 'sit',
    name: '1098-7654',
    phase: 'II',
    compoundInfo: CompoundInfoData[4],
    details: [
      'Excepteur sint occaecat cupidatat non proident',
      // tslint:disable-next-line:max-line-length
      'Sunt in culpa qui officia deserunt mollit anim id est laborum',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
      'Accusantium doloremque laudantium',
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    parameterName: 'amet1',
    name: '3212-3456',
    phase: 'II',
    compoundInfo: CompoundInfoData[5],
    details: [
      'Totam rem aperiam',
      'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      'Nemo enim ipsam voluptatem',
      'Quia voluptas sit aspernatur aut odit aut fugit',
      'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    parameterName: 'amet2',
    name: '7890-9876',
    phase: 'II',
    compoundInfo: CompoundInfoData[5],
    details: [
      'Neque porro quisquam est',
      'Qui dolorem ipsum quia dolor sit amet',
      // tslint:disable-next-line:max-line-length
      'Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt',
      'Ut labore et dolore magnam aliquam quaerat voluptatem',
      'Ut enim ad minima veniam',
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    parameterName: 'consectetur',
    name: '5432-1098A',
    phase: 'III',
    compoundInfo: CompoundInfoData[6],
    details: [
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
      'Quis autem vel eum iure reprehenderit',
      'Qui in ea voluptate velit esse quam nihil molestiae consequatur,',
      'Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    parameterName: 'elit',
    name: '7654-3212',
    phase: 'III',
    compoundInfo: CompoundInfoData[7],
    details: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
      'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
      'Sint occaecati cupiditate non provident',
      'Similique sunt in culpa qui officia deserunt mollitia animi',
      'Sid est laborum et dolorum fuga',
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      // tslint:disable-next-line:max-line-length
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
];

export const DiseaseData: IDisease[] = [
  {
    parameterName: 'li',
    primaryName: 'LI',
    secondaryName: 'Et harum quidem',
    trials: [TrialsData[0]],
  },
  {
    parameterName: 'lorem',
    primaryName: 'Lorem',
    secondaryName: 'Rerum facilis',
    trials: [TrialsData[1]],
  },
  {
    parameterName: 'ipsum',
    primaryName: 'Ipsum',
    secondaryName: 'Est et expedita distinctio',
    trials: [TrialsData[2]],
  },
  {
    parameterName: 'dolor',
    primaryName: 'Dolor',
    secondaryName: 'Nam libero',
    trials: [TrialsData[3], TrialsData[4], TrialsData[5]],
  },
  {
    parameterName: 'sit',
    primaryName: 'Sit',
    secondaryName: 'Tempore',
    trials: [TrialsData[6]],
  },
  {
    parameterName: 'amet',
    primaryName: 'Amet',
    secondaryName: 'Soluta nobis',
    trials: [TrialsData[7], TrialsData[8]],
  },
  {
    parameterName: 'consectetur',
    primaryName: 'Consectetur',
    secondaryName: 'Est eligendi',
    trials: [TrialsData[9]],
  },
  {
    parameterName: 'elit',
    primaryName: 'Elit',
    secondaryName: 'Optio cumque nihil',
    trials: [TrialsData[10]],
  },
];

export const TAreaData: ITArea[] = [
  {
    name: 'Cardiology',
    diseases: [DiseaseData[0], DiseaseData[1], DiseaseData[2]],
  },
  {
    name: 'Endocrinology',
    diseases: [DiseaseData[3], DiseaseData[4]],
  },
  {
    name: 'Gastroenterology',
    diseases: [DiseaseData[5]],
  },
  {
    name: 'Hematology',
    diseases: [DiseaseData[6], DiseaseData[7]],
  },
];
