import handlebars from 'handlebars';
import fs from 'fs';

import IParseMailTempleteDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTempleteDTO): Promise<string> {
    const templateFileContnt = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(templateFileContnt);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
