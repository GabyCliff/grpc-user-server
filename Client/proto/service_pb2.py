# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/service.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x13proto/service.proto\"\x07\n\x05\x45mpty\"1\n\x0b\x43urrentUser\x12\x10\n\x08username\x18\x01 \x01(\t\x12\x10\n\x08password\x18\x02 \x01(\t\"l\n\x0bUserRequest\x12\x10\n\x08username\x18\x01 \x01(\t\x12\x10\n\x08password\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x0f\n\x07surname\x18\x04 \x01(\t\x12\r\n\x05\x65mail\x18\x05 \x01(\t\x12\x0b\n\x03\x64ni\x18\x06 \x01(\x05\"u\n\x0cUserResponse\x12\n\n\x02id\x18\x01 \x01(\x03\x12\x10\n\x08username\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x0f\n\x07surname\x18\x04 \x01(\t\x12\x0b\n\x03\x64ni\x18\x05 \x01(\x05\x12\r\n\x05\x65mail\x18\x06 \x01(\t\x12\x0c\n\x04role\x18\x07 \x01(\t\"$\n\x12TransactionMessage\x12\x0e\n\x06messge\x18\x01 \x01(\t\"0\n\x10ResponseUserList\x12\x1c\n\x05users\x18\x01 \x03(\x0b\x32\r.UserResponse\"_\n\x16ResponseObjectUserData\x12\x1b\n\x04user\x18\x01 \x01(\x0b\x32\r.UserResponse\x12(\n\x0b\x64\x65scription\x18\x02 \x01(\x0b\x32\x13.TransactionMessage2\xab\x01\n\x0buserService\x12&\n\x07getList\x12\x06.Empty\x1a\x11.ResponseUserList\"\x00\x12\x38\n\rcreateNewUser\x12\x0c.UserRequest\x1a\x17.ResponseObjectUserData\"\x00\x12:\n\x0f\x66indCurrentUser\x12\x0c.CurrentUser\x1a\x17.ResponseObjectUserData\"\x00\x62\x06proto3')



_EMPTY = DESCRIPTOR.message_types_by_name['Empty']
_CURRENTUSER = DESCRIPTOR.message_types_by_name['CurrentUser']
_USERREQUEST = DESCRIPTOR.message_types_by_name['UserRequest']
_USERRESPONSE = DESCRIPTOR.message_types_by_name['UserResponse']
_TRANSACTIONMESSAGE = DESCRIPTOR.message_types_by_name['TransactionMessage']
_RESPONSEUSERLIST = DESCRIPTOR.message_types_by_name['ResponseUserList']
_RESPONSEOBJECTUSERDATA = DESCRIPTOR.message_types_by_name['ResponseObjectUserData']
Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), {
  'DESCRIPTOR' : _EMPTY,
  '__module__' : 'proto.service_pb2'
  # @@protoc_insertion_point(class_scope:Empty)
  })
_sym_db.RegisterMessage(Empty)

CurrentUser = _reflection.GeneratedProtocolMessageType('CurrentUser', (_message.Message,), {
  'DESCRIPTOR' : _CURRENTUSER,
  '__module__' : 'proto.service_pb2'
  # @@protoc_insertion_point(class_scope:CurrentUser)
  })
_sym_db.RegisterMessage(CurrentUser)

UserRequest = _reflection.GeneratedProtocolMessageType('UserRequest', (_message.Message,), {
  'DESCRIPTOR' : _USERREQUEST,
  '__module__' : 'proto.service_pb2'
  # @@protoc_insertion_point(class_scope:UserRequest)
  })
_sym_db.RegisterMessage(UserRequest)

UserResponse = _reflection.GeneratedProtocolMessageType('UserResponse', (_message.Message,), {
  'DESCRIPTOR' : _USERRESPONSE,
  '__module__' : 'proto.service_pb2'
  # @@protoc_insertion_point(class_scope:UserResponse)
  })
_sym_db.RegisterMessage(UserResponse)

TransactionMessage = _reflection.GeneratedProtocolMessageType('TransactionMessage', (_message.Message,), {
  'DESCRIPTOR' : _TRANSACTIONMESSAGE,
  '__module__' : 'proto.service_pb2'
  # @@protoc_insertion_point(class_scope:TransactionMessage)
  })
_sym_db.RegisterMessage(TransactionMessage)

ResponseUserList = _reflection.GeneratedProtocolMessageType('ResponseUserList', (_message.Message,), {
  'DESCRIPTOR' : _RESPONSEUSERLIST,
  '__module__' : 'proto.service_pb2'
  # @@protoc_insertion_point(class_scope:ResponseUserList)
  })
_sym_db.RegisterMessage(ResponseUserList)

ResponseObjectUserData = _reflection.GeneratedProtocolMessageType('ResponseObjectUserData', (_message.Message,), {
  'DESCRIPTOR' : _RESPONSEOBJECTUSERDATA,
  '__module__' : 'proto.service_pb2'
  # @@protoc_insertion_point(class_scope:ResponseObjectUserData)
  })
_sym_db.RegisterMessage(ResponseObjectUserData)

_USERSERVICE = DESCRIPTOR.services_by_name['userService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _EMPTY._serialized_start=23
  _EMPTY._serialized_end=30
  _CURRENTUSER._serialized_start=32
  _CURRENTUSER._serialized_end=81
  _USERREQUEST._serialized_start=83
  _USERREQUEST._serialized_end=191
  _USERRESPONSE._serialized_start=193
  _USERRESPONSE._serialized_end=310
  _TRANSACTIONMESSAGE._serialized_start=312
  _TRANSACTIONMESSAGE._serialized_end=348
  _RESPONSEUSERLIST._serialized_start=350
  _RESPONSEUSERLIST._serialized_end=398
  _RESPONSEOBJECTUSERDATA._serialized_start=400
  _RESPONSEOBJECTUSERDATA._serialized_end=495
  _USERSERVICE._serialized_start=498
  _USERSERVICE._serialized_end=669
# @@protoc_insertion_point(module_scope)