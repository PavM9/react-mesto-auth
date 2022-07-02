import React from 'react';
import {  Route,  Switch,  Redirect,  useHistory,} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from "./ImagePopup"
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = React.useState(false);
  const [deletingCard, setDeletingCard] = React.useState({});
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cards, userData]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleCardLike(card) {
    api
      .addLike(card._id)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCardDislike(card) {
    api
      .removeLike(card._id)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Отправляем запрос в API на удаление карточки
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
				setCards(cards => cards.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleConfirmDelete(card) {
    setDeletingCard(card);
    setConfirmDeletePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setConfirmDeletePopupOpen(false);
    setSelectedCard(null);
  };

  React.useEffect(() => {
    if (isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard) {
      const onEscClose = (event) => {
        if (event.key === "Escape") {
          closeAllPopups();
        }
      };
      document.addEventListener("keydown", onEscClose);
      return () => {
        document.removeEventListener("keydown", onEscClose);
      };
    }
  }, [isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, selectedCard]);

  function handleUpdateAvatar(data) {
		api
      .editAvatar(data)
      .then((item) => {
        setCurrentUser({...currentUser, avatar: item.avatar});
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
	}

  function handleUpdateUser(userData) {
    api
      .editProfile(userData)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups()
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleAddPlaceSubmit(card) {
    api
      .addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
				closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>
        <Switch>
          <ProtectedRoute
          exact
          path="/"
          component={Main}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          cards={cards}
          onCardClick={setSelectedCard}
          onCardLike={handleCardLike}
          onCardDislike={handleCardDislike}
          onCardDelete={handleConfirmDelete}
          />

          <Route path="/sign-up">
            <Register
            />
          </Route>
          <Route path="/sign-in">
            <Login
            />
          </Route>
        </Switch>

        <Footer/>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleAddPlaceSubmit}
        />

        <ConfirmDeletePopup
          card={deletingCard}
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
        />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
