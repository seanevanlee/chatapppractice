import "../src/App.css";
import {
  ChatEngine,
  ChatList,
  ChatCard,
  NewChatForm,
  ChatFeed,
  ChatHeader,
  IceBreaker,
  MessageBubble,
  IsTyping,
  // ConnectionBar,
  NewMessageForm,
  ChatSettings,
  ChatSettingsTop,
  PeopleSettings,
  PhotosSettings,
  OptionsSettings,
} from "react-chat-engine";

export default function App(props) {
  return (
    <div className="container">
      <ChatEngine
        height="100vh"
        projectID="
5a7f12f3-1240-448b-8789-fc59d527a0ae"
        userName="seanevanlee"
        userSecret="coffee"
        development={props.development}
        // Customize UI
        renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
        renderChatCard={(chat, index) => (
          <ChatCard key={`${index}`} chat={chat} />
        )}
        renderNewChatForm={(creds) => <NewChatForm creds={creds} />}
        renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
        renderChatHeader={(chat) => <ChatHeader />}
        renderIceBreaker={(chat) => <IceBreaker />}
        renderMessageBubble={(
          creds,
          chat,
          lastMessage,
          message,
          nextMessage
        ) => (
          <MessageBubble
            lastMessage={lastMessage}
            message={message}
            nextMessage={nextMessage}
            chat={chat}
          />
        )}
        renderIsTyping={(typers) => <IsTyping />}
        // renderConnectionBar={(chat) => <ConnectionBar />}
        renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
        renderChatSettings={(chatAppState) => (
          <ChatSettings {...chatAppState} />
        )}
        renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
        renderPeopleSettings={(creds, chat) => <PeopleSettings />}
        renderPhotosSettings={(chat) => <PhotosSettings />}
        renderOptionsSettings={(creds, chat) => <OptionsSettings />}
      />
    </div>
  );
}
