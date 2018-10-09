/**
 * Remove all children from a container.
 * https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
 * @param $container
 */
export function removeChildren ($container) {
	while ($container.firstChild) {
		$container.firstChild.remove();
	}
}