import { Router } from 'express';
import { ExpressAdapter } from '../../adapters/express.adapter';
import { ControllerFactory } from '../../factories/controller.factory';
import * as bodyParser from 'body-parser';

const router = Router();
const createProjectController = ControllerFactory.createProjectController();

router.use(bodyParser.json({
    limit: '1mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
router.use('/create-project', ExpressAdapter.adapt(createProjectController.parseAndCreate.bind(createProjectController)));

export default router;