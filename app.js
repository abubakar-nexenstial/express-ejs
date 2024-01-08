import express from 'express';
import path from 'path';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8080;

const router = express.Router();

router.get('/', (request, response) => {
  response.render('index', { title: 'Welcome!' });
});

router.get('/student', (request, response) => {
  response.render('index', { title: 'Welcome, student!' });
});

router.get('/teacher', (request, response) => {
  response.render('index', { title: 'Welcome, teacher!' });
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
