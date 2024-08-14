import { MessagesRepository } from "./messages.repository";

export class MessagesServices {

  //instancia do repositorio
  messagesRepo: MessagesRepository;

  constructor() {
    // NÃO FAZER ISSO EM APPS REAIS
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }

}