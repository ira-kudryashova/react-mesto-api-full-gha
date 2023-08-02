// импортируем нужные модули
import { transports as _transports, format as _format } from 'winston';
import { logger, errorLogger as _errorLogger } from 'express-winston';

// создадим логгер запросов
const requestLogger = logger({
  transports: [ //опуия transports отвечает за то? куда нужно писать лог + это массив? в который можно записать др/транспорты
    new _transports.File({ filename: 'request.log' }),
  ],
  format: _format.json(), //опция format отвечает за формат записи логов
});

// логгер ошибок
const errorLogger = _errorLogger({
  transports: [
    new _transports.File({ filename: 'error.log' }),
  ],
  format: _format.json(),
});

export default {
  requestLogger,
  errorLogger,
};
