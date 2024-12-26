import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";

export default function ReviewPage() {
  const [activeEpisode, setActiveEpisode] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const episodes = [
    { id: 1, title: "Episode 1 Coach", description: "Coach Si ton Maire te Trompe toi aussi faut le Tromper" },
    { id: 2, title: "Episode 2 le Cleint", description: "Votree Ventilateur fntionne pas" },
    { id: 3, title: "Episode 3 Parlette", description: "Le parllete que vpus m'avez vendie." },
    { id: 4, title: "Episode 4 Tecko", description: "La perruque e ma femle Ma feme." },
    { id: 5, title: "Episode 5 Le boonheur", description: "Qualification des Guépards." },
    // { id: 6, title: "Episode 5", description: "Lorem ipsum dolor sit amet consectetur." },
    // { id: 7, title: "Episode 5", description: "Lorem ipsum dolor sit amet consectetur." },
    // { id: 8, title: "Episode 5", description: "Lorem ipsum dolor sit amet consectetur." },
    // { id: 9, title: "Episode 5", description: "Lorem ipsum dolor sit amet consectetur." },
    // { id: 10, title: "Episode 5", description: "Lorem ipsum dolor sit amet consectetur." },
  ];

  const handleClick = (id) => {
    setActiveEpisode(id);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const filteredEpisodes = episodes.filter((episode) => episode.id !== activeEpisode);
  const currentEpisode = episodes.find((episode) => episode.id === activeEpisode);

  return (
    <div className="pt-[12rem] h-screen pb-4 text-white bg-black px-8">
      {/* Contenu affiché en haut */}
      <div className="space-y-12">
        <div className="space-y-3">
          <p className="font-bold text-3xl">{currentEpisode.title}</p>
          <p>{currentEpisode.description}</p>
          <div className="flex items-center gap-2">
            <div
              onClick={toggleModal}
              className="cursor-pointer rounded-full border p-2"
            >
              <FaPlay size={12} />
            </div>
            <button className="flex items-center gap-2" onClick={toggleModal}>
              Regarder
            </button>
          </div>
        </div>

        {/* Liste des épisodes */}
        <div className="grid grid-cols-4 gap-4">
          {filteredEpisodes.map((episode) => (
            <div
              key={episode.id}
              onClick={() => handleClick(episode.id)}
              className={`h-[10rem] rounded-lg p-4 flex flex-col justify-end space-y-2 cursor-pointer transition-all duration-300 bg-amber-600`}
            >
              <p className="font-bold text-xl">{episode.title}</p>
              <p>{episode.description}</p>
              <div className="flex items-center gap-2">
                <div className="cursor-pointer rounded-full border p-2">
                  <FaPlay size={12} />
                </div>
                <button className="flex items-center gap-2">Regarder</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-[90%] max-w-[600px] space-y-4">
            <h2 className="text-black text-2xl font-bold">
              {currentEpisode.title}
            </h2>
            <p className="text-black">{currentEpisode.description}</p>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-black text-white rounded-lg"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
