import { Router } from 'express';
import { ExpressAdapter } from '../../adapters/express.adapter';
import { ControllerFactory } from '../../factories/controller.factory';

const router = Router();
const createProjectController = ControllerFactory.createProjectController();

router.use('/create-project', ExpressAdapter.adapt(createProjectController.create.bind(createProjectController)));

export default router;
