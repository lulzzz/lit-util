/**
 * Remove all children from a container.
 * @param $container
 */
export function removeChildren ($container) {
	let $child;
	while (($child = $container.firstChild) != null) {
		$container.removeChild($child);
	}
}