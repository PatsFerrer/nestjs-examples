import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages.service';

@Controller('messages')
export class MessagesController {

  //crie uma instancia do service
  messagesService: MessagesServices;

  constructor() {
    // DONT DO THIS ON REAL APP
    // USE DEPENDENCY INJECTION
    this.messagesService = new MessagesServices();
  }


  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

}
