import { container } from 'tsyringe';

import IHashedProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCrysptHashProvider';

container.registerSingleton<IHashedProvider>(
  'HashedProvider',
  BCryptHashProvider,
);
