// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: retroShop_grpc.proto

package com.unla.retroshopservicegrpc.grpc;

public interface ResponseUserListOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ResponseUserList)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>repeated .UserResponse users = 1;</code>
   */
  java.util.List<com.unla.retroshopservicegrpc.grpc.UserResponse> 
      getUsersList();
  /**
   * <code>repeated .UserResponse users = 1;</code>
   */
  com.unla.retroshopservicegrpc.grpc.UserResponse getUsers(int index);
  /**
   * <code>repeated .UserResponse users = 1;</code>
   */
  int getUsersCount();
  /**
   * <code>repeated .UserResponse users = 1;</code>
   */
  java.util.List<? extends com.unla.retroshopservicegrpc.grpc.UserResponseOrBuilder> 
      getUsersOrBuilderList();
  /**
   * <code>repeated .UserResponse users = 1;</code>
   */
  com.unla.retroshopservicegrpc.grpc.UserResponseOrBuilder getUsersOrBuilder(
      int index);
}