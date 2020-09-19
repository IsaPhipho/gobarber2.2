import { Router } from 'express';

import appointmentsRouter from '@mmodules/appointments/infra/http/routes/appointments.routes';
import providersRouter from '@mmodules/appointments/infra/http/routes/providers.routes';

import usersRouter from '@mmodules/users/infra/http/routes/users.routes';
import sessionsRouter from '@mmodules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@mmodules/users/infra/http/routes/password.routes';
import profileRouter from '@mmodules/users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/providers', providersRouter);

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
