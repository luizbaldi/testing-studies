import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/search';

describe('Spotify Wrapper', () => {
  let fetchedStub;
  let fetchedPromise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedPromise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('generic search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should the correct url to fetch', () => {
      context('passing one type', () => {
        const artists = search('BonIver', 'artist');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=BonIver&type=artist');

        const albums = search('Cocoon', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Cocoon&type=album')
      });

      context('passing more than one type', () => {
        const artistsAndAlbums = search('BonIver', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=BonIver&type=artist,album');
      });
    });

    it('should return the JSON data from the promise', () => {
      fetchedPromise.resolves({ body: 'json' });
      const artists = search('BonIver', 'BonIver');

      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('search artists', () => {
    it('should call fetch function', () => {
      searchArtists('BonIver');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call a fetch with the correct url', () => {
      searchArtists('BonIver');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=BonIver&type=artist');

      searchArtists('Djonga');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Djonga&type=artist');
    });
  });

  describe('search albums', () => {
    it('should call fetch function', () => {
      searchAlbums('BonIver');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call a fetch with the correct url', () => {
      searchAlbums('BonIver');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=BonIver&type=album');

      searchAlbums('SantaCeia');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=SantaCeia&type=album');
    });
  });

  describe('search tracks', () => {
    it('should call fetch function', () => {
      searchTracks('SkinnyLove');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call a fetch with the correct url', () => {
      searchTracks('SkinnyLove');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=SkinnyLove&type=track');

      searchTracks('SantaCeia');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=SantaCeia&type=track');
    });
  });

  describe('search playlists', () => {
    it('should call fetch function', () => {
      searchPlaylists('BucketMoments');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call a fetch with the correct url', () => {
      searchPlaylists('BucketMoments');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=BucketMoments&type=playlist');

      searchPlaylists('LofiChillWaves');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=LofiChillWaves&type=playlist');
    });
  });

});
