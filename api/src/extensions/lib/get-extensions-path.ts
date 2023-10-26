import { join } from 'path';
import { getEnv } from '../../env.js';

export const getExtensionsPath = () => {
	const env = getEnv();

	if (env['EXTENSIONS_LOCATION']) {
		return join(env['TEMP_PATH'], 'extensions');
	}

	return env['EXTENSIONS_PATH'];
};
