import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import SurveyRepository from "../repositories/SurveyRepository";
import SurveyUserRepository from "../repositories/SurveyUserRepository";
import UserRepository from "../repositories/UserRepository";
import SendMailService from "../services/SendMailService";

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const userRepository = getCustomRepository(UserRepository);
    const surveyRepository = getCustomRepository(SurveyRepository);
    const surveyUserRepository = getCustomRepository(SurveyUserRepository);

    // Verifica se o user existe
    const userExists = await userRepository.findOne({ email });

    if (!userExists) {
      return response.status(400).json({
        error: 'User does not exists',
      })
    }

    // Verifica se o survey existe
    const survey = await surveyRepository.findOne({ id: survey_id });

    if (!survey) {
      return response.status(400).json({
        error: 'Survey does not exists',
      })
    }

    // Salva as informações na tabela surveys_users
    const surveyUser = await surveyUserRepository.create({
      user_id: userExists.id,
      survey_id
    })

    await surveyUserRepository.save(surveyUser);

    await SendMailService.execute(email, survey.title, survey.description);

    return response.status(201).json(surveyUser);
  }
}

export default SendMailController;