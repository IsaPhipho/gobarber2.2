import { container } from 'tsyringe';

import '@mmodules/users/providers';
import './providers';

import IAppointmentsRepository from '@mmodules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@mmodules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@mmodules/users/repositories/IUsersRepository';
import UsersRepository from '@mmodules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@mmodules/users/repositories/IUserTokensRepository.ts';
import UserTokensRepository from '@mmodules/users/infra/typeorm/repositories/UserTokensRepository';

import INotificationsRepository from '@mmodules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@mmodules/notifications/infra/typeorm/repositories/NotificationsRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);
