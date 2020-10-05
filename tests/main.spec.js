import { expect } from 'chai';
import { search, searchAlbums, searchArtist, searchTracks, searchPlaylist} from '../src/main';
describe('SpotIfood - Test', () => {
    
    describe('smoke tests', () => {

        it('should exist the search method', () =>{
            expect(search).to.exist;
        });
        it('should exist the searchAlbums method', () =>{
            expect(searchAlbums).to.exist;
        });
        it('should exist the searchArtist method', () =>{
            expect(searchArtist).to.exist;
        });
        it('should exist the searchTracks method', () =>{
            expect(searchTracks).to.exist;
        });
        it('should exist the searchPlaylist method', () =>{
            expect(searchPlaylist).to.exist;
        });
    });

});
