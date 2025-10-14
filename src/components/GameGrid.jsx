import React, { useState } from 'react';
import Modal from 'react-modal';
import { games } from '../data/game'; // 데이터 임포트

Modal.setAppElement('#root'); // 모달 액세서빌리티

const GameGrid = () => {
const [selectedGame, setSelectedGame] = useState(null); // 모달용
  const [filter, setFilter] = useState({ category: '추천', genre: '', platform: '' }); // 필터 상태
  const [searchTerm, setSearchTerm] = useState(''); // 검색 상태

  // 필터링된 게임
  const filteredGames = games.filter(game => 
    game.category.includes(filter.category) &&
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter.genre === '' || game.genre === filter.genre) &&
    (filter.platform === '' || game.platform.includes(filter.platform))
  );

  return (
    <div className="p-8">
      {/* 상단 탭: 추천/신규 */}
      <div className="flex justify-center mb-8 space-x-4">
        {['추천', '신규', '전체'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter({ ...filter, category: cat })}
            className={`px-4 py-2 rounded ${filter.category === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 검색 & 필터 */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="게임명 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <select
          value={filter.genre}
          onChange={(e) => setFilter({ ...filter, genre: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="">전체 장르</option>
          <option value="RPG">RPG</option>
          <option value="스포츠">스포츠</option>
          <option value="FPS">FPS</option>
          <option value="액션 RPG">액션 RPG</option>
          {/* 더 추가 */}
        </select>
        <select
          value={filter.platform}
          onChange={(e) => setFilter({ ...filter, platform: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="">전체 플랫폼</option>
          <option value="Android">Android</option>
          <option value="iOS">iOS</option>
        </select>
      </div>

         {/* 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.map(game => (
          <div
            key={game.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className="relative aspect-square cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedGame(game)}
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {game.isComingSoon && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  출시 예정
                </span>
              )}
            </div>
            <div className="p-2 text-center">
              <h3 className="font-bold text-gray-800">{game.title}</h3>
              <p className="text-sm text-gray-600">{game.genre}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 모달: 상세 설명 */}
      <Modal
        isOpen={!!selectedGame}
        onRequestClose={() => setSelectedGame(null)}
        className="bg-white w-11/12 md:w-1/2 mx-auto mt-20 p-6 rounded-lg max-h-96 overflow-y-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        {selectedGame && (
          <>
            <h2 className="text-2xl font-bold mb-4">{selectedGame.title}</h2>
            <p className="mb-4">{selectedGame.description}</p>
            <p className="text-sm text-gray-600 mb-4">장르: {selectedGame.genre} | 플랫폼: {selectedGame.platform.join(', ')}</p>
            <a
              href={selectedGame.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Google Play 스토어 열기
            </a>
            <button onClick={() => setSelectedGame(null)} className="ml-4 px-4 py-2 bg-gray-300 rounded">닫기</button>
          </>
        )}
      </Modal>
    </div>
  );
}

export default GameGrid
