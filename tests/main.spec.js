import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

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

    describe('Should call fetch function', () => {
    
        it('should call fetch function', () =>{
            const fetchStub = sinon.stub(global, 'fetch');
            
            const artist = search();

            expect(fetchStub).to.have.been.calledOnce;
        });    
    });    
});

