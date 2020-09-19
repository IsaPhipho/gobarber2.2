import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityServive from '@mmodules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProviderDayAvailabilityServive = container.resolve(
      ListProviderDayAvailabilityServive,
    );

    const availability = await listProviderDayAvailabilityServive.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(availability);
  }
}
