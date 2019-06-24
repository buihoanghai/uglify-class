<?php
use \iprice\frontend\Tracking\GoogleTagManager\Tracker;
?>
<a class="c8 n- ka ni iv e_ ah fa ao pd ac a4 ev ew kd"
   data-ga-trigger="ga-conversion"
   data-vars-action="{{ $dataVarsAction }}"
   target="_blank"
   data-vars-merchant="{{{ $merchant . Tracker::getMerchantSuffix($product) }}}"
   rel="nofollow"
   data-vars-extras="position:{{$position}}"
   href="{{ $mainUrl }}"
>
    @if ($product['_source']['price']['discount'] > 0)
        <span class="la le fa af b tc a2 kc e0 g_">SALE</span>
    @endif
    <div class="c4 a0 g- g9 e8 e7 if db">
        <amp-img
                 width="1"
                 height="1"
                 layout="responsive"
                 src="{{ Option::getProductCdn() . '/' . $img }}"
                 alt="{{{ $product['_source']['brand']['name'] ." ". $product['_source']['name'] }}}"
        >
        </amp-img>
    </div>
    <span class="az ay g- g9 c- if">
        <span class="d c_ k pd at">
        @if ($product['_source']['brand']['name'])
                <b class="c_">{{{ $product['_source']['brand']['name'] }}}</b>
                {{{ $trimmedShort }}}
            @else
                {{{ $product['_source']['name'] }}}
            @endif
        </span>
        <span class="e4 db aq">
            @if ($product['_source']['price']['discount'] > 0)
                <span class="accent1 db b ai">{{ $currencyUtil->format($product['_source']['price']['sale']) }}</span>
            @endif
            <span class="{{ Util->convert($product['_source']['price']['discount'] > 0 ? 'f11 lh-11 original strike b dib' : 'accent b f16') }}">
                {{ $currencyUtil->format($product['_source']['price']['original']) }}
            </span>
            @if ($product['_source']['price']['discount'] > 0)
                <span class="g7 b af tc ad">−{{ $product['_source']['price']['discount'] }}%</span>
            @endif
        </span>
    </span>
    <button class="dn c6 b aa tc fk fa ig">
        {{ trans('iprice.shop_now') }}
    </button>
    <div class="c9 kc ic ae fc ac ab ig c8 nk">
        <i class="ra n9 db"></i>
    </div>
</a>
