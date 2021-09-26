import app from './app';
import './database';

app.listen(app.get('port'), () => {
	console.log('[EXPRESS] Server on port', app.get('port'));
});
