import tippy, { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling

export default function tooltip(node, params = {}) {
  // Determine the title to show. We want to prefer
  //    the custom content passed in first, then the
  // HTML title attribute then the aria-label
  // in that order.
  const custom = params.content;
  const title = node.title;
  const label = node.getAttribute("aria-label");
  const content = custom || title || label;

  // Let's make sure the "aria-label" attribute
  // is set so our element is accessible:
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
  if (!label) node.setAttribute("aria-label", content);

  // Clear out the HTML title attribute since
  // we don't want the default behavior of it
  // showing up on hover.
  node.title = "";

  // Support any of the Tippy props by forwarding all "params":
  // https://atomiks.github.io/tippyjs/v6/all-props/
  const tip = tippy(node, {
    allowHTML: true,
    theme: "axios",
    arrow: false,
    interactive: true,
    interactiveBorder: 15,
    plugins: [followCursor],
    delay: [null, 100],
    trigger: "click",
    onShow(instance) {
      // Only display the tooltip if we have content
      if (!instance.props.content) {
        return false;
      }
    },
    content,
    ...params,
  });

  console.log(tip);
  console.log(tip.reference);

  return {
    // If the props change, let's update the Tippy instance:
    update: (newParams) => {
      tip.setProps({ content, ...newParams });

      if (!newParams.content) {
        tip.hide();
      } else {
        tip.show();
      }
    },

    // Clean up the Tippy instance on unmount:
    destroy: () => {
      tip.destroy();
    },
  };
}
