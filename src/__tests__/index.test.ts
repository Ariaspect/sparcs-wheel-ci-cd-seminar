import hello from '..';

if (hello('ariaspect') !== undefined) {
	throw new Error('hello error');
}
