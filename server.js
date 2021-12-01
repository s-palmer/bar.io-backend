const app = require('./src/routes');
const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
