import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilityServive from '@mmodules/appointments/services/ListProviderMounthAvailabilityService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderMonthAvailabilityServive = container.resolve(
      ListProviderMonthAvailabilityServive,
    );

    const availability = await listProviderMonthAvailabilityServive.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}
