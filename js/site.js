// Shared across every page. Previously pasted inline into all 15 via Webflow's
// custom-code panel, which duplicated ~45KB and meant a change had to be made
// fifteen times. The staging-host redirect stays inline in each page's <head>,
// since it has to run before this file is fetched.

// --- PostHog ---------------------------------------------------------------
!(function (t, e) {
    var o, n, p, r;
    e.__SV ||
      ((window.posthog = e),
      (e._i = []),
      (e.init = function (i, s, a) {
        function g(t, e) {
          var o = e.split('.');
          (2 == o.length && ((t = t[o[0]]), (e = o[1])),
            (t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            }));
        }
        (((p = t.createElement('script')).type = 'text/javascript'), (p.async = !0), (p.src = s.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js'), (r = t.getElementsByTagName('script')[0]).parentNode.insertBefore(p, r));
        var u = e;
        for (
          void 0 !== a ? (u = e[a] = []) : (a = 'posthog'),
            u.people = u.people || [],
            u.toString = function (t) {
              var e = 'posthog';
              return ('posthog' !== a && (e += '.' + a), t || (e += ' (stub)'), e);
            },
            u.people.toString = function () {
              return u.toString(1) + '.people (stub)';
            },
            o = 'init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep'.split(' '),
            n = 0;
          n < o.length;
          n++
        )
          g(u, o[n]);
        e._i.push([i, s, a]);
      }),
      (e.__SV = 1));
  })(document, window.posthog || []);
  posthog.init('phc_uR2YosPfWc3pDZibSwWMCg8jPx5E9BcAS6itTLMpxd9E', {
    api_host: 'https://eu.i.posthog.com',
    defaults: '2026-01-30',
  });
  _linkedin_partner_id = '10129793';
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  (function (l) {
    if (!l) {
      window.lintrk = function (a, b) {
        window.lintrk.q.push([a, b]);
      };
      window.lintrk.q = [];
    }
    var s = document.getElementsByTagName('script')[0];
    var b = document.createElement('script');
    b.type = 'text/javascript';
    b.async = true;
    b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    s.parentNode.insertBefore(b, s);
  })(window.lintrk);

// --- CTA button state ------------------------------------------------------
// Swaps the header CTA between Sign Up and Open Dashboard based on the Auth0
// session cookie set by the dashboard app on moioapp.com.
function updateButtonBasedOnAuth() {
    const buttons = document.querySelectorAll('#CTA-button, #CTA-button-mobile');
    if (!buttons.length) {
      return;
    }
    const isAuthenticated = document.cookie.includes('auth0.yA1bQWOyHLXDt29UIig6IdmXWrDryluZ.is.authenticated=true');
    buttons.forEach((button) => {
      if (isAuthenticated) {
        button.innerText = 'Open Dashboard';
        button.href = 'https://moioapp.com/dashboard';
      } else {
        button.innerText = 'Sign Up';
        button.href = 'https://moioapp.com/signup';
      }
    });
  }
  document.addEventListener('DOMContentLoaded', updateButtonBasedOnAuth);
